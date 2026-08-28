---
title: "디버그용 console.log 일괄 제거"
summary: "커밋 전에 잊고 남긴 console.log를 명령어 한 줄로 모두 지우는 챌린지입니다."
order: 13
difficulty: "중급"
tags: ["전역 명령", "실무"]
practice: true
practiceFile: "problems/problem13.md"
answer: |
  :g/console\.log/d
  (패턴에 매치하는 모든 줄을 한 번에 삭제합니다)
---

## 목표

다음 코드에서 디버깅용으로 남긴 `console.log` 줄을 모두 제거하세요.

```js
function total(a, b) {
  console.log("a:", a);
  console.log("b:", b);
  const sum = a + b;
  console.log("sum:", sum);
  return sum;
}
```

결과:

```js
function total(a, b) {
  const sum = a + b;
  return sum;
}
```

## 조건

- 한 줄씩 `dd`로 지우지 말고 `:g/패턴/d` 전역 명령 사용
- `console.log`가 아닌 줄(`const sum`, `return sum` 등)은 그대로 유지
