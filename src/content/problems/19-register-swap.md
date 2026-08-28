---
title: "레지스터로 줄 순서 바꾸기"
summary: "레지스터를 활용해 두 줄을 안전하게 교환하는 챌린지입니다."
order: 9
difficulty: "고급"
tags: ["레지스터"]
practice: true
practiceFile: "challenge09.md"
answer: |
  gg "ayy j "bdd "bP
  → a에 "first"를, b에 "second"를 담고(dd로 둘째 줄 삭제),
    남은 "first" 줄 위에 b("second")를 붙여넣어 순서를 바꿉니다.

  또는 (레지스터 1개로 간단히)
  dd p   (첫 줄 삭제 후 남은 줄 아래에 붙여넣기로 교환)
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
