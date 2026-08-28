---
title: "로그에서 ERROR만 남기기"
summary: "장애 분석 시 방대한 로그에서 원하는 패턴만 남기고 나머지를 지우는 챌린지입니다."
order: 17
difficulty: "고급"
tags: ["전역 명령", "정규식"]
practice: true
practiceFile: "problems/problem17.md"
answer: |
  :v/ERROR/d
  (또는 :g!/ERROR/d — "ERROR"를 포함하지 않는 모든 줄을 삭제)
---

## 목표

다음 로그에서 `ERROR`가 포함된 줄만 남기고 나머지는 모두 지우세요.

```
[INFO] server started
[DEBUG] cache warm
[ERROR] db connection failed
[INFO] retrying request
[ERROR] timeout waiting for response
[DEBUG] gc run complete
```

결과:

```
[ERROR] db connection failed
[ERROR] timeout waiting for response
```

## 조건

- `:v/패턴/d`(또는 `:g!/패턴/d`)로 매치되지 않는 줄을 한 번에 삭제
- `ERROR` 줄을 하나씩 골라 남기는 방식(반대로 지우는 방식) 사용 금지
