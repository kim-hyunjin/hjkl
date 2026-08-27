---
title: "단어 점프"
summary: "w/b/e로 문장을 탐색하며 특정 단어로 이동하는 챌린지입니다."
order: 13
difficulty: "초급"
tags: ["이동", "단어"]
practice: true
practiceFile: "challenge03.md"
hint: |
  - `target`은 6번째 단어입니다
  - `5w`로 한 번에 5단어 이동하거나 `w`를 5번
answer: |
  5w   → target의 t로 이동
---

## 목표

다음 문장에서 커서를 `target`으로 이동하세요.

```
vim makes editing text fast and target friendly power
```

커서는 문장 맨 앞(`vim`의 `v`)에 있습니다.

## 조건

- `w` / `b` / `e`만 사용(문자 이동, 숫자 이동은 허용)
- `f`/`t` 사용 금지

> 완료 후 클리어 버튼을 눌러주세요.
