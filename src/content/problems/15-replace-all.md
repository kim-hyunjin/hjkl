---
title: "파일 전체 치환"
summary: "정규식으로 파일 전체에서 일관되게 바꾸는 챌린지입니다."
order: 15
difficulty: "중급"
tags: ["치환", "정규식"]
practice: true
practiceFile: "challenge05.md"
hint: |
  - `\<cat\>`이 단어 경계 패턴
  - `:%s/\<cat\>/dog/g`
answer: |
  :%s/\<cat\>/dog/g
---

## 목표

다음 텍스트에서 **단어 경계를 지켜** `cat`을 `dog`로 바꾸세요.

```
cat catalog concatenate cat catty cat
```

결과:

```
dog catalog concatenate dog doggy dog
```

## 조건

- `catalog`, `concatenate`, `catty`는 **바뀌면 안 됩니다**
- `:%s` 치환 사용
- `g` 플래그 필수

> 완료 후 클리어 버튼을 눌러주세요.
