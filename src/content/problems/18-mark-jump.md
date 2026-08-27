---
title: "마크로 빠르게 복귀"
summary: "마크를 활용해 파일의 여러 위치를 오가는 챌린지입니다."
order: 18
difficulty: "중급"
tags: ["마크"]
practice: true
practiceFile: "challenge08.md"
hint: |
  - `ma`로 현재 위치 마크
  - `G`나 `}`를 이용해 아래로 이동
  - `` `a ``로 복귀하면 위치(열)까지 정확히 돌아옵니다
answer: |
  ma
  G   (또는 } 이동)
  `a
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

> 완료 후 클리어 버튼을 눌러주세요.
