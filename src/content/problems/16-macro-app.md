---
title: "매크로로 줄 끝에 세미콜론 붙이기"
summary: "매크로를 기록·재생해 여러 줄을 일괄 수정하는 챌린지입니다."
order: 16
difficulty: "중급"
tags: ["매크로", "자동화"]
practice: true
practiceFile: "challenge06.md"
hint: |
  - `qa` → `A;<Esc>` → `j` → `q`
  - 이후 `99@a` 또는 필요한 만큼 `@a`
answer: |
  gg qa A;<Esc> j q 99@a
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

> 완료 후 클리어 버튼을 눌러주세요.
