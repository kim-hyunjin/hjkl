---
title: "모드 전환 마스터"
summary: "Normal/Insert 모드를 오가는 기본기를 10초 안에 처리하는 챌린지입니다."
order: 1
difficulty: "입문"
tags: ["모드"]
practice: true
practiceFile: "challenge01.md"
answer: |
  $        → 줄 끝으로 이동
  A juice<Esc>   → 입력 모드로 " juice" 입력 후 Normal 모드 복귀
---

## 목표

주어진 텍스트를 다음 상태로 바꾸세요.

```
시작:
apple banana cherry

목표:
apple banana cherry juice
```

`cherry` 뒤에 ` juice`를 추가하고 Normal 모드로 돌아와야 합니다.

## 조건

- 화살표 키 사용 금지
- `hjkl`과 `A`(또는 `a`)만 사용
- 마지막에는 반드시 Normal 모드(`<Esc>` 상태)로 마칠 것
