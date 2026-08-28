---
title: "테스트 더미 데이터 순차 증가"
summary: "임시 목데이터의 값을 비주얼 블록과 증가 명령으로 한 번에 채우는 챌린지입니다."
order: 17
difficulty: "고급"
tags: ["비주얼 블록", "증가"]
practice: true
practiceFile: "challenge17.md"
answer: |
  " 첫 줄의 "10" 위에서
  Ctrl-v jjj $      " 네 줄의 숫자 컬럼을 비주얼 블록으로 선택(길이가 같으므로 $ 불필요해도 안전)
  g Ctrl-a          " 블록 안 숫자를 1,2,3,4씩 순차 증가
---

## 목표

다음은 임시로 만든 목데이터입니다. 모든 값이 `10`으로 동일합니다.

```
apple,10
banana,10
cherry,10
date,10
```

각 줄의 숫자를 위에서부터 순서대로 하나씩 증가하도록 바꾸세요.

결과:

```
apple,11
banana,12
cherry,13
date,14
```

## 조건

- 한 줄씩 `Ctrl-a`를 누르지 말고, 비주얼 블록으로 숫자 컬럼을 한 번에 선택 후 `g Ctrl-a`로 순차 증가
- 과일 이름과 콤마는 수정하지 않기
