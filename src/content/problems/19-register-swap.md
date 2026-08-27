---
title: "레지스터로 줄 순서 바꾸기"
summary: "레지스터를 활용해 두 줄을 안전하게 교환하는 챌린지입니다."
order: 19
difficulty: "고급"
tags: ["레지스터"]
practice: true
practiceFile: "challenge09.md"
hint: |
  - `"ayy`로 첫 줄 복사, `"byy`로 둘째 줄 복사
  - `dd`로 두 줄 삭제 후 원하는 순서로 재구성
  - 또는 `dd` 후 `P`를 이용한 회전
answer: |
  gg "ayy j "byy dd "ap "bp

  또는

  dd P   (두 줄 삭제 후 위쪽에 붙여넣기로 교환)
---

## 목표

다음 두 줄의 순서를 바꾸세요.

```
first
second
```

결과:

```
second
first
```

## 조건

- 레지스터 2개 이상 사용
- `p`/`P`로 붙여넣기
- 삭제 후 내용을 잃지 않아야 함

> 완료 후 클리어 버튼을 눌러주세요.
