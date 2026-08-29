# hjkl — Vim 학습 사이트

Vim을 기초부터 실전까지 배우는 한국어 학습 사이트입니다.

- **문제풀기** (`/`, 상세는 `/problems/[slug]/`): 문제안내·예상 결과·힌트를 보고 에디터에서 직접 풀면, 제출 시 결과를 자동 채점하고 몇 번의 키 입력으로 해결했는지 알려줍니다. 짧은 미션형 챌린지와 실무 시나리오 기반 문제를 함께 다룹니다
- **학습하기** (`/learn/`): 기초(모드, 이동, 편집, 검색/치환, yank/paste, 파일 다루기, 비주얼 모드)부터 심화(매크로, 버퍼/분할창, 마크/레지스터, 명령행/정규식, 텍스트 객체, autocommand, diff/병합, 플러그인)까지 이어지는 강의
- **브라우저 실습**: [CodeMirror 6](https://codemirror.net) + [codemirror-vim](https://github.com/replit/codemirror-vim)으로 각 강의/문제 페이지에서 바로 vim 키맵 실습
- **치트시트** (`/cheatsheet/`): 자주 쓰는 명령어 검색

## 기술 스택

- [Astro](https://astro.build) — 정적 사이트 생성
- [Tailwind CSS v4](https://tailwindcss.com) — 스타일링
- [Starwind UI](https://starwind.dev) — Astro용 스타일 컴포넌트
- [codemirror](https://www.npmjs.com/package/codemirror) + [@replit/codemirror-vim](https://www.npmjs.com/package/@replit/codemirror-vim) — 브라우저 vim 실습
- GitHub Pages 배포

## 로컬 개발

패키지 매니저로 [pnpm](https://pnpm.io)을 사용합니다.

```bash
pnpm install
pnpm run dev
```

## 빌드

```bash
pnpm run build
pnpm run preview
```

## 배포 (gh-pages 브랜치)

로컬에서 빌드 후 `gh-pages` 브랜치로 푸시합니다 (GitHub Actions 미사용).

```bash
pnpm run deploy
```

`dist/` 산출물이 `origin/gh-pages` 브랜치에 푸시되어 GitHub Pages(`/hjkl/`)에 배포됩니다.

> GitHub Pages 설정에서 배포 소스가 `gh-pages` 브랜치로 지정되어 있어야 합니다.

## 콘텐츠 추가

콘텐츠 컬렉션은 두 개입니다(`src/content.config.ts`). 각 폴더에 파일을 추가하면 로더가 파일명(예: `02-movement.md` → `02-movement`)을 슬러그로 사용해 자동으로 목록과 상세 페이지를 생성합니다. 두 컬렉션 모두 `title`, `summary`, `order`, `tags`를 공통으로 가집니다.

### 학습하기 — `src/content/lessons/*.md`

마크다운 파일이며, 본문이 그대로 강의 내용이 됩니다. `order` 값 기준으로 기초(1~10강)부터 심화(11강~)까지 이어지는 한 트랙입니다.

frontmatter에 `practice: true`와 `practiceFile`을 지정하면 강의 하단에 자유 실습 에디터가 붙고, `public/practice/lessons/` 아래의 파일을 읽어와 초기 내용으로 채웁니다.

```yaml
practice: true
practiceFile: "lessons/lesson02.md"   # public/practice/ 기준 경로
```

### 문제풀기 — `src/content/problems/*.json`

JSON 파일이며, 채점을 위해 초기 버퍼와 정답을 데이터로 들고 있습니다. 별도의 실습 파일은 두지 않습니다.

| 필드 | 설명 |
| --- | --- |
| `difficulty` | `입문` / `초급` / `중급` / `고급` 중 하나 |
| `description` | 문제안내에 렌더링되는 마크다운 문자열(`## 목표`, `## 조건` 등) |
| `initialContent` | 에디터에 채워지는 초기 버퍼 텍스트 |
| `expected` | 제출 시 버퍼와 비교해 정답을 판정할 최종 텍스트 |
| `hint` | "힌트 보기"를 펼쳤을 때 나오는 힌트 |

```json
{
  "title": "모드 전환 마스터",
  "summary": "Normal/Insert 모드를 오가는 기본기를 다루는 문제입니다.",
  "order": 1,
  "difficulty": "입문",
  "tags": ["모드"],
  "description": "## 목표\n\n...\n\n## 조건\n\n- ...",
  "initialContent": "apple banana cherry",
  "expected": "apple banana cherry juice",
  "hint": "$, A"
}
```
