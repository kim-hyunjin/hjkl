---
title: "객체 속성에 콤마 일괄 추가"
summary: "린터가 요구하는 트레일링 콤마를 비주얼 블록으로 한 번에 붙이는 챌린지입니다."
order: 18
difficulty: "중급"
tags: ["비주얼 블록", "실무"]
practice: true
practiceFile: "challenge18.md"
answer: |
  " host 줄에서
  Ctrl-v jj $     " host, port, timeout 세 줄을 각 줄 끝까지 블록 선택(길이가 달라도 $로 처리)
  A , <Esc>       " 블록의 각 줄 실제 끝에 콤마 추가
---

## 목표

다음 객체 리터럴은 마지막 속성을 제외하고 콤마가 빠져 있어 문법 오류가 납니다.

```js
const config = {
  host: "localhost"
  port: 8080
  timeout: 3000
  debug: true
};
```

`host`, `port`, `timeout` 줄 끝에만 콤마를 붙이세요. 마지막 `debug` 줄은 그대로 둡니다.

결과:

```js
const config = {
  host: "localhost",
  port: 8080,
  timeout: 3000,
  debug: true
};
```

## 조건

- 비주얼 블록(`Ctrl-v`)과 `$`, `A`를 조합해 길이가 다른 줄들의 실제 끝에 한 번에 콤마 추가
- 세 줄에 각각 따로 `a,<Esc>`를 반복하지 않기
- `debug: true` 줄에는 콤마를 붙이지 않기
