# TODO

## A. 컴포넌트 교체 — `src/pages/cheatsheet.astro`

1. `<input class="cheatsheet-filter">` → starwind `Input` (`type="search"`, `size="sm"`, 기존 `id="cheat-filter"` 유지)
2. `<table><tbody>...` → starwind `Table` / `TableBody` / `TableRow` / `TableCell`
3. `global.css`의 `.cheatsheet-filter`, `.cheatsheet-filter:focus` 규칙 삭제 (Input 컴포넌트가 대체)

## B. Dead CSS 제거 — `src/styles/global.css`

4. `.dashboard`, `.dashboard h2`, `.dashboard-card .card-title a`, `.dashboard-card .card-title a:hover` 삭제 (참조하는 `.astro` 없음)
5. `.progress-block`, `.progress-label` 삭제 (참조하는 `.astro` 없음)
6. `.card-head`, `.card-difficulty` 삭제 (참조하는 `.astro` 없음)

## C. 챌린지 힌트/정답 예시 재구성 — `problems/[...slug].astro`

배경: `entry.data.solution` 필드는 스키마에만 있고 실제 콘텐츠(examples 10개, challenges 10개) 어디에도 채워져 있지 않아, 현재 `{solution &amp;&amp; 

<details class="orca-details">
<summary>...}` 블록은 항상 렌더링되지 않는 죽은 분기다. 반면 challenges 10개 전부는 본문(`## 힌트`, `## 정답 예시`)에 힌트/정답이 이미 있는데, 지금은 실습(PracticeTerminal)보다 **위**에 스포일러 없이 그대로 노출되고 있다.</summary>



</details>

7. `src/content.config.ts`: `examples`/`challenges`에서 미사용 `solution` 필드 제거, `challenges`에 `hint: z.string().optional()`, `answer: z.string().optional()` 추가
8. `challenges` 10개 `.md` 파일 전부: 본문의 `## 힌트`, `## 정답 예시` 섹션을 제거하고 그 내용을 frontmatter `hint:` / `answer:` 로 이동 (examples에는 힌트/정답 섹션이 없으므로 변경 없음)
9. `src/pages/problems/[...slug].astro`: 기존 `{solution && <details class="solution">...}` 블록 제거, `PracticeTerminal` 렌더링 **다음**에 `kind === "challenges" && entry.data.hint`일 때만 힌트/정답 토글 렌더링 (기본 접힘)
10. `global.css`의 `.solution` 관련 스타일 클래스명/스타일 재검토 (그대로 재사용 가능한지 확인 후 유지/수정)

### 9번 구현 방식 — 리서치 결과 및 결정

- starwind에 이미 설치된 9개 컴포넌트(theme-toggle, progress, card, button, badge, alert, table, native-select, input) 중에는 "기본 접힘/클릭 펼침"에 맞는 것이 없음.
- `@starwind-ui/astro` 패키지(node_modules) 안에는 아직 이 프로젝트에 스캐폴딩되지 않은 프리미티브가 다수 있고, 그중 `collapsible`(`Root`/`Trigger`/`Panel`)이 정확히 이 용도에 맞음. `accordion`은 여러 항목을 그룹으로 묶는 용도라 힌트·정답 하나짜리 토글에는 과함.
- **결정: starwind `Collapsible`을 새로 설치해서 사용한다.** (네이티브 `<details>` 유지 옵션도 검토했으나, 사용자가 Collapsible 신규 설치를 선택함.)
- 참고사항:
  - `Collapsible`은 헤더리스(스타일 없음) 프리미티브라 `src/components/starwind/collapsible/`에 `CollapsibleRoot.astro`/`CollapsibleTrigger.astro`/`CollapsiblePanel.astro`/`index.ts`/`variants.ts`를 이 프로젝트의 기존 컴포넌트 패턴(예: `alert`, `badge`)대로 새로 만들어야 함 — 로컬에 starwind CLI 바이너리가 없어 수동으로 스캐폴딩 필요.
  - `@starwind-ui/astro/collapsible`의 `CollapsibleRoot.astro`는 이미 `<script>`로 `@starwind-ui/runtime/collapsible`의 `createCollapsible`을 사용해 열림/닫힘을 제어함(=클라이언트 JS 필요). 현재 설치된 9개 컴포넌트 중 클라이언트 JS를 쓰는 건 `ThemeToggle`뿐이라, Collapsible이 두 번째 사례가 됨.
  - 트리거 버튼 스타일은 `global.css`의 기존 `details`/`details summary`/`details[open] summary`/`details pre` 스타일(배경 `--muted`, 테두리 `--border`, `--radius`)을 Tailwind 유틸리티로 옮겨 맞추면 시각적 일관성 유지 가능.
  - 트리거에 펼침/접힘 표시용 chevron 아이콘 추가를 검토 중이었음 (`@tabler/icons` 사용 — 정확한 아이콘 파일 경로는 미확인 상태에서 중단됨, 적용 시 실제 존재하는 아이콘 파일명 재확인 필요).
  - `starwind.config.json`의 `components` 목록에도 `collapsible` 항목 추가 필요.

## D. `challenges`/`examples` → `problems` 통합

11. `src/content.config.ts`: `examples`, `challenges` 두 컬렉션을 구분 없이 하나의 `problems` 컬렉션으로 통합. 스키마는 현재 `challenges`가 가진 `difficulty: z.enum(['입문','초급','중급','고급'])`를 필수 필드로 채택 (examples 스키마엔 `difficulty`가 없었음)
12. `src/content/examples/*.md` 10개, `src/content/challenges/*.md` 10개를 `src/content/problems/`로 이동·통합. 파일명은 현재 두 폴더 모두 `01-*.md` ~ `10-*.md`로 겹치므로 병합 시 번호 재부여 필요 (충돌하는 파일명은 없음 — 각각 8자 내외 고유 슬러그 사용 중)
13. 기존 `examples` 콘텐츠 10개(줄 끝 공백 제거, JSON 정리, 로그 분석, 변수·함수 이름 변경, CSV 표 정리, HTML 태그 편집, YAML 들여쓰기, git 커밋 메시지, 여러 줄 붙여넣기, quickfix 순회) 각각에 실제 난이도에 맞는 `difficulty` 값 지정 (현재는 필드 자체가 없어 전부 비어 있음)
14. `kind`(`"examples" | "challenges"`) 개념을 사용하는 코드 전부 정리: `src/pages/index.astro`(problems 합성 로직), `src/components/ProblemTable.astro`(유형 필터 드롭다운·유형 컬럼·"실전예제"/난이도 배지 분기), `src/pages/problems/[...slug].astro`(`kind` prop, `crumbLabel`, `defaultPracticeFile` 분기) → 모두 단일 `problems` 컬렉션 기준으로 단순화
15. `getStaticPaths` 라우팅(`src/pages/problems/[...slug].astro`)과 이전글/다음글 페이지네이션 로직을 통합된 `problems` 컬렉션 하나로 재작성

> 주의: C(9번)의 `kind === "challenges"` 조건부 힌트/정답 토글도 이 통합 이후에는 `kind` 없이 `entry.data.hint` 유무만으로 판단하도록 같이 손봐야 함.

## E. astro check 결과 확인 후 에러 해결

## 진행 순서 메모

- A, B는 서로 독립적이라 바로 진행 가능.
- C는 7 → 8 → 9(+ collapsible 컴포넌트 스캐폴딩) → 10 순서로 묶어서 진행해야 함 (7/8 없이는 9에서 렌더링할 데이터가 없음).
- D(11~~15)는 C(7~~10)와 스키마·페이지 템플릿이 겹치므로, C를 먼저 끝내고 나서 D를 진행하거나 두 작업을 합쳐서 한 번에 스키마/템플릿을 정리하는 편이 안전함.

