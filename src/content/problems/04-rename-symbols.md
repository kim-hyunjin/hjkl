---
title: "변수·함수 이름 일괄 변경"
summary: "정규식과 확인 옵션으로 안전하게 심볼 이름을 바꿉니다."
order: 4
difficulty: "중급"
tags: ["리팩토링", "치환"]
practice: true
practiceFile: "example04.md"
---

## 상황

`userList`라는 변수를 `users`로 바꾸고 싶습니다. 단순 치환은 `userListLength` 같은 이름까지 오염시킬 수 있습니다.

## 안전한 치환

단어 경계 `\<...\>`를 사용하면 **정확히 일치하는 단어만** 바뀝니다.

```
:%s/\<userList\>/users/g
```

## 확인하며 교체

```
:%s/\<userList\>/users/gc
```

각 매치에서 `y`/`n`/`a`/`q`로 결정하므로 위험한 경우를 건너뛸 수 있습니다.

## 여러 파일에 적용

```
:argdo %s/\<userList\>/users/gce | update
```

- `:argdo` : 열려 있는 파일들에 반복
- `c` : 확인
- `e` : 매치가 없어도 에러 없음
- `update` : 변경된 파일만 저장

## 검색으로 미리 확인

치환 전에 얼마나 많은 위치가 있는지 확인하세요.

```
/‹userList›
```

또는 `grep` 비슷하게:

```
:vimgrep /userList/ %
:copen
```

## 연습

1. 예제 파일에서 `userList`가 여러 번 등장하는 상황 만들기
2. `:%s/\<userList\>/users/gc`로 확인하며 교체
3. `userListLength`이 바뀌지 않았는지 확인
4. `u`로 되돌리고 여러 파일 버전 시도
