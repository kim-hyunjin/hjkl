---
title: "함수 호출 인자 순서 바꾸기"
summary: "API 시그니처가 바뀌어 인자 순서를 맞바꿔야 하는, 실무에서 흔한 상황을 다루는 챌린지입니다."
order: 16
difficulty: "중급"
tags: ["텍스트 객체", "리팩터링"]
practice: true
practiceFile: "problems/problem16.md"
answer: |
  f( l ciw callback<Esc>   " 첫 번째 인자를 callback으로 교체
  f, w ciw delay<Esc>      " 두 번째 인자를 delay로 교체
  (같은 단어가 두 번 나오더라도 위치 기반 이동이라 헷갈리지 않습니다)
---

## 목표

라이브러리 업데이트로 인자 순서가 `(callback, delay)`로 바뀌었습니다. 다음 호출을 새 순서에 맞게 고치세요.

```js
setTimeout(delay, callback);
```

결과:

```js
setTimeout(callback, delay);
```

## 조건

- `ciw`(단어 안쪽 변경)로 각 인자 이름만 교체
- 괄호와 세미콜론은 유지
- 줄 전체를 지우고 새로 입력하지 않기
