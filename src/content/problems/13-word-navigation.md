---
title: "단어 점프"
summary: "w/b/e로 문장을 탐색하며 특정 단어로 이동하는 챌린지입니다."
order: 3
difficulty: "초급"
tags: ["이동", "단어"]
practice: true
practiceFile: "challenge03.md"
answer: |
  6w   → vim(1) makes(2) editing(3) text(4) fast(5) and(6) target(7)이므로 6단어 이동해야 target에 도착
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
