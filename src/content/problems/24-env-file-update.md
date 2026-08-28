---
title: ".env 파일 값 교체"
summary: "배포 환경에 맞춰 .env 파일의 값만 정확히 바꾸는 챌린지입니다."
order: 13
difficulty: "초급"
tags: ["검색", "텍스트 객체"]
practice: true
practiceFile: "problems/problem14.md"
answer: |
  /API_URL<CR> f= l c$ https://api.example.com<Esc>
  /DEBUG<CR> f= l ciw false<Esc>
  (c$로 등호 뒤부터 줄 끝까지만 바꾸고, 키 이름은 건드리지 않습니다)
---

## 목표

다음 `.env` 파일을 프로덕션 값으로 바꾸세요.

```
API_URL=http://localhost:3000
DEBUG=true
DB_HOST=localhost
DB_PORT=5432
```

`API_URL`을 `https://api.example.com`으로, `DEBUG`를 `false`로 바꾸세요.

결과:

```
API_URL=https://api.example.com
DEBUG=false
DB_HOST=localhost
DB_PORT=5432
```

## 조건

- `DB_HOST`, `DB_PORT` 줄은 수정하지 않기
- `=` 뒤의 값만 지우고 새로 입력(키 이름 유지)
- 줄 전체를 지우고 다시 치지 않기
