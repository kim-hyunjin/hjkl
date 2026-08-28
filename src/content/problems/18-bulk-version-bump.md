---
title: "package.json 버전 일괄 업데이트"
summary: "메이저 업그레이드 시 관련 패키지들의 버전 문자열을 한 번에 바꾸는 챌린지입니다."
order: 18
difficulty: "고급"
tags: ["치환", "정규식"]
practice: true
practiceFile: "problems/problem18.md"
answer: |
  :%s/\^17\.0\.2/^18.2.0/g
  (같은 버전 문자열을 쓰는 react, react-dom만 한 번에 바뀌고, lodash·axios는 그대로 유지됩니다)
---

## 목표

React를 18로 올리기로 했습니다. 다음 `package.json` 일부에서 `^17.0.2`로 고정된 패키지들의 버전을 `^18.2.0`으로 바꾸세요.

```json
{
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "lodash": "^4.17.21",
    "axios": "^0.21.1"
  }
}
```

결과:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lodash": "^4.17.21",
    "axios": "^0.21.1"
  }
}
```

## 조건

- `:%s/패턴/치환/g` 한 번으로 일치하는 모든 줄 처리(줄마다 손으로 고치지 않기)
- `lodash`, `axios` 버전은 그대로 유지
- 패키지 이름이나 콤마, 따옴표 구조는 건드리지 않기
