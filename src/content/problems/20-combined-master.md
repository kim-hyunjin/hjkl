---
title: "종합 마스터 — 문서 정비"
summary: "이동·치환·비주얼·매크로를 모두 활용해 문서를 정리하는 종합 챌린지입니다."
order: 20
difficulty: "고급"
tags: ["종합"]
practice: true
practiceFile: "challenge10.md"
hint: |
  1. `:%s/\v^(todo|DONE):/\- [\1]/`… 대소문자를 먼저 통일
  2. `:%s/\v([Tt]odo):/\- [ ] /` 등 단계적으로
  3. 완료 줄을 블록 선택해 잘라내고 맨 아래에 붙이기
answer: |
  :%s/\v^\s*([Tt]odo):\s*/\- [ ] /
  :%s/\v^\s*([Dd][Oo][Nn][Ee]):\s*/\- [x] /
  (완료 줄을 V 선택 → dd → G → p)
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

> 모든 조건을 처리하면 클리어! 종합 실력이 늘었는지 확인해보세요.
