---
title: "매크로로 줄 끝에 세미콜론 붙이기"
summary: "매크로를 기록·재생해 여러 줄을 일괄 수정하는 챌린지입니다."
order: 5
difficulty: "중급"
tags: ["매크로", "자동화"]
practice: true
practiceFile: "problems/problem05.md"
answer: |
  gg qa A;<Esc>j q 3@a
  → 첫 줄은 기록하면서 처리되므로, 남은 세 줄만큼 3@a로 재생합니다.
---

## 목표

다음 코드에서 **모든 실행문의 끝**에 세미콜론을 붙이세요.

```js
const a = 1
const b = 2
const c = a + b
console.log(c)
```

결과:

```js
const a = 1;
const b = 2;
const c = a + b;
console.log(c);
```

## 조건

- 매크로(`qa`~`q`, `@a`) 사용
- 한 줄씩 수동으로 붙이지 않기
- 매크로는 상대 이동으로 구성(줄 번호 금지)
