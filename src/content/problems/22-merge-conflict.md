---
title: "git 충돌 마커 정리"
summary: "머지 충돌 마커를 지우고 원하는 쪽 코드만 남기는, 실무에서 매일 만나는 챌린지입니다."
order: 12
difficulty: "중급"
tags: ["삭제", "실무"]
practice: true
practiceFile: "challenge12.md"
answer: |
  /<<<<<<<<CR> d/=======<CR>   " HEAD 블록(마커 포함) 삭제
  dd                            " ======= 구분선 삭제
  /^>>>>>>><CR> dd              " 하단 마커 줄 삭제
  (결과적으로 feature/greeting 쪽 코드 한 줄만 남습니다)
---

## 목표

다음은 머지 충돌이 발생한 파일입니다.

```
function greet(name) {
<<<<<<< HEAD
  console.log("Hi " + name);
=======
  console.log("Hello, " + name + "!");
>>>>>>> feature/greeting
}
```

`feature/greeting` 쪽 코드만 남기고 충돌 마커(`<<<<<<<`, `=======`, `>>>>>>>`)와 `HEAD` 쪽 코드를 모두 삭제하세요.

결과:

```
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

## 조건

- 검색(`/`)으로 마커 줄을 찾아 이동
- `dd` 또는 범위 삭제(`d/패턴<CR>`)로 불필요한 줄 제거
- 남기려는 코드 줄은 수정하지 않기
