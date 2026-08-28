---
title: "종합 마스터 — 문서 정비"
summary: "이동·치환·비주얼·매크로를 모두 활용해 문서를 정리하는 종합 챌린지입니다."
order: 10
difficulty: "고급"
tags: ["종합"]
practice: true
practiceFile: "challenge10.md"
answer: |
  :%s/\v^\s*([Tt]odo):\s*/- [ ] /
  :%s/\v^\s*([Dd][Oo][Nn][Ee]):\s*/- [x] /
  ("ship release" 줄로 이동 → dd → p로 "refactor module" 다음(= "clean desk" 앞)으로 이동)
---

## 목표

다음 문서를 아래 규칙에 맞게 정리하세요.

```
todo: buy milk
todo: write code
DONE: ship release
todo: refactor module
done: clean desk
```

규칙:

1. 모든 줄 앞에 `- ` 붙이기
2. `todo`는 `[ ]`, `done`/`DONE`은 `[x]`로 표기
3. 대소문자 무시
4. 완료 항목을 문서 맨 아래로 이동

예상 결과:

```
- [ ] buy milk
- [ ] write code
- [ ] refactor module
- [x] ship release
- [x] clean desk
```

## 조건

- 비주얼 블록, 치환, `dd`/`p` 모두 사용
- `\c`(대소문자 무시) 사용 가능
- 매크로는 선택 사항
