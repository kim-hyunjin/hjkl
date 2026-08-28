---
title: "JSON 설정 값 수정"
summary: "실무에서 자주 만나는 JSON 설정 파일의 값을 텍스트 객체로 빠르게 바꾸는 챌린지입니다."
order: 10
difficulty: "초급"
tags: ["텍스트 객체", "설정 파일"]
practice: true
practiceFile: "problems/problem10.md"
answer: |
  /development<CR> ci" production<Esc>
  /3000<CR> ciw 8080<Esc>
  (문자열은 ci"로, 숫자는 ciw로 안쪽 값만 바꿉니다.
   ci"는 커서가 따옴표 "안"에 있어야 하므로 따옴표까지 포함해 검색하지 않습니다)
---

## 목표

다음 설정 파일을 수정하세요.

```json
{
  "name": "hjkl-app",
  "version": "1.0.0",
  "env": "development",
  "port": 3000
}
```

`env`를 `"production"`으로, `port`를 `8080`으로 바꾸세요.

결과:

```json
{
  "name": "hjkl-app",
  "version": "1.0.0",
  "env": "production",
  "port": 8080
}
```

## 조건

- 문자열 값은 `ci"`(따옴표 안쪽)로 교체
- 숫자 값은 `ciw`(단어 안쪽)로 교체
- 키(`"env"`, `"port"`)와 콤마, 중괄호는 건드리지 않기
