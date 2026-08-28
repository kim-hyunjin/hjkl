---
title: "깨진 들여쓰기 정리"
summary: "코드 리뷰에서 자주 지적받는 들여쓰기 불일치를 명령 모드로 빠르게 맞추는 챌린지입니다."
order: 14
difficulty: "중급"
tags: ["들여쓰기", "실무"]
practice: true
practiceFile: "problems/problem15.md"
answer: |
  :set shiftwidth=2
  gg
  j >>    " if 줄을 한 단계 들여쓰기
  j <<    " return "positive" 줄을 6칸에서 4칸으로
  j >>    " 닫는 중괄호를 한 단계 들여쓰기
  j <<    " 마지막 return 줄을 4칸에서 2칸으로
  (>>/<<로 줄 단위 들여쓰기·내어쓰기를 조정합니다)
---

## 목표

다음 코드는 들여쓰기가 뒤죽박죽입니다.

```js
function check(x) {
if (x > 0) {
      return "positive";
}
    return "non-positive";
}
```

들여쓰기 폭 2칸 기준으로 정리하세요.

결과:

```js
function check(x) {
  if (x > 0) {
    return "positive";
  }
  return "non-positive";
}
```

## 조건

- `>>`, `<<`(또는 개수 지정 `2>>`)로 줄 단위 들여쓰기 조정
- 코드 내용(문자열, 키워드)은 수정하지 않기
- 한 글자씩 스페이스를 지우거나 추가하지 않기
