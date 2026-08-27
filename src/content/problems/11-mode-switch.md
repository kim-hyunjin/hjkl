---
title: "모드 전환 마스터"
summary: "Normal/Insert 모드를 오가는 기본기를 10초 안에 처리하는 챌린지입니다."
order: 11
difficulty: "입문"
tags: ["모드"]
practice: true
practiceFile: "challenge01.md"
hint: |
  - 커서가 `cherry` 뒤에 없으면 `$`로 줄 끝으로 이동
  - `A`는 줄 끝에서 입력을 시작합니다
answer: |
  $   → 줄 끝으로
  A   → 입력 모드
   juice<Esc>
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

> 완료하면 "클리어" 버튼을 눌러 진행률을 갱신하세요.
