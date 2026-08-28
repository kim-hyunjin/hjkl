# hjkl — Vim 학습 사이트

Vim을 기초부터 실전까지 배우는 한국어 학습 사이트입니다.

- **학습하기** (`/learn/`): 기초(모드, 이동, 편집, 검색/치환, yank/paste, 파일 다루기, 비주얼 모드)부터 심화(매크로, 버퍼/분할창, 마크/레지스터, 명령행/정규식, 텍스트 객체, autocommand, diff/병합, 플러그인)까지 이어지는 강의
- **문제풀이** (`/problems/`): 목표·조건·실습·정답 확인 형태의 문제. 짧은 미션형 챌린지와 실무 시나리오 기반 문제를 함께 다룹니다
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

콘텐츠 컬렉션은 두 개입니다. 각 폴더에 마크다운 파일을 추가하면 `src/content.config.ts`의 로더가 파일명(예: `01-movement.md` → `01-movement`)을 슬러그로 사용해 자동으로 목록과 상세 페이지(`/learn/[slug]/`, `/problems/[slug]/`)를 생성합니다.

- `src/content/lessons/` — 학습하기(`/learn/`). `order` 값 기준으로 기초(1~10강)부터 심화(11강~)까지 이어지는 한 트랙입니다.
- `src/content/problems/` — 문제풀이(`/problems/`). 목표(`## 목표`)·조건(`## 조건`) 섹션과 frontmatter의 `answer`(정답 확인에 표시)로 구성합니다. `difficulty`는 `입문`/`초급`/`중급`/`고급` 중 하나여야 합니다.

두 컬렉션 모두 공통 필드(`title`, `summary`, `order`, `tags`)에 더해 `practice`/`practiceFile`을 가질 수 있습니다. `practice: true`로 설정하고 `practiceFile`을 지정하면 해당 상세 페이지에 실습 에디터가 렌더링되고, `public/practice/` 아래의 파일을 읽어와 초기 내용으로 채웁니다.

실습 파일은 콘텐츠 종류에 맞춰 하위 폴더에 둡니다.

- `public/practice/lessons/` — 학습하기 실습 파일 (`practiceFile: "lessons/lesson01.md"`처럼 경로를 씁니다)
- `public/practice/problems/` — 문제풀이 실습 파일 (`practiceFile: "problems/problem01.md"`)
