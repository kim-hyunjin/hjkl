---
title: "정확한 삭제"
summary: "텍스트 객체와 모션을 활용해 원하는 부분만 지우는 챌린지입니다."
order: 4
difficulty: "초급"
tags: ["삭제", "텍스트 객체"]
practice: true
practiceFile: "problems/problem04.md"
answer: |
  (커서를 <span>old</span>의 "old" 위에 두고) dit
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
- `dit`는 커서가 있는 태그의 안쪽 내용을 지우므로, `<span>` 안에 커서를 두고 실행합니다
