---
title: "마크로 빠르게 복귀"
summary: "마크를 활용해 파일의 여러 위치를 오가는 챌린지입니다."
order: 8
difficulty: "중급"
tags: ["마크"]
practice: true
practiceFile: "problems/problem08.md"
answer: |
  ma
  3j   → STRUCTURE END로 이동 (START 기준 3줄 아래)
  `a   → 백틱 마크는 줄+열까지 정확히 복귀
---

## 목표

다음 텍스트에서 `START`에 마크를 걸고, `END`로 이동한 뒤 다시 `START`로 복귀하세요.

```
LINE A
STRUCTURE START
LINE B
LINE C
STRUCTURE END
LINE D
```

커서가 `STRUCTURE START` 줄에 있을 때 시작합니다.

## 조건

- 마크 `a` 사용
- `` `a ``(백틱 a)로 정확한 위치 복귀
- 화살표 금지
