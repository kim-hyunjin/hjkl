# hjkl — Vim 학습 사이트

Vim을 기초부터 실전까지 배우는 한국어 학습 사이트입니다.

- **기초**: 모드, 이동, 편집, 검색/치환, yank/paste, 파일 다루기, 비주얼 모드
- **심화**: 매크로, 버퍼/분할창, 마크/레지스터, 명령행/정규식, 텍스트 객체, autocommand, diff/병합, 플러그인
- **실전예제**: 실제 작업 흐름에서 쓰는 vim 워크플로
- **챌린지**: 단계별 미션으로 실력 확인
- **브라우저 실습**: [CodeMirror 6](https://codemirror.net) + [codemirror-vim](https://github.com/replit/codemirror-vim)으로 vim 키맵 실습
- **치트시트**: 자주 쓰는 명령어 검색

## 기술 스택

- [Astro](https://astro.build) — 정적 사이트 생성
- [Tailwind CSS v4](https://tailwindcss.com) — 스타일링
- [Starwind UI](https://starwind.dev) — Astro용 스타일 컴포넌트
- [codemirror](https://www.npmjs.com/package/codemirror) + [@replit/codemirror-vim](https://www.npmjs.com/package/@replit/codemirror-vim) — 브라우저 vim 실습
- GitHub Pages 배포

## 로컬 개발

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
npm run preview
```

## 배포 (gh-pages 브랜치)

로컬에서 빌드 후 `gh-pages` 브랜치로 푸시합니다 (GitHub Actions 미사용).

```bash
npm run deploy
```

`dist/` 산출물이 `origin/gh-pages` 브랜치에 푸시되어 GitHub Pages(`/hjkl/`)에 배포됩니다.

> GitHub Pages 설정에서 배포 소스가 `gh-pages` 브랜치로 지정되어 있어야 합니다.

## 콘텐츠 추가

각 섹션의 마크다운 파일을 추가하면 자동으로 목록과 상세 페이지가 생성됩니다.

- `src/content/lessons/` — 기초
- `src/content/advanced/` — 심화
- `src/content/examples/` — 실전예제
- `src/content/challenges/` — 챌린지

실습 파일은 `public/practice/`에 두면 실습이 포함된 레슨 페이지의 편집기에서 자동으로 열립니다.
