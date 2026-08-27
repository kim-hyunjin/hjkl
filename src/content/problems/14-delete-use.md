---
title: "정확한 삭제"
summary: "텍스트 객체와 모션을 활용해 원하는 부분만 지우는 챌린지입니다."
order: 14
difficulty: "초급"
tags: ["삭제", "텍스트 객체"]
practice: true
practiceFile: "challenge04.md"
hint: |
  - 태그 안 내용 삭제는 `dit`(delete inner tag)
  - 커서를 `<span>` 안에 두고 `dit`
answer: |
  (커서를 span 안에) dit
---

## 목표

다음 HTML에서 `<span>` 내용만 지우고 구조는 유지하세요.

```html
<p>Hello <span>old</span> world!</p>
```

결과:

```html
<p>Hello <span></span> world!</p>
```

## 조건

- `<span>` 태그는 남겨야 합니다
- `d`와 텍스트 객체를 사용
- 커서는 어디에서 시작해도 무방

> 완료 후 클리어 버튼을 눌러주세요.
