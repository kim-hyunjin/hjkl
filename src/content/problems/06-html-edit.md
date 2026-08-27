---
title: "HTML 태그 안의 텍스트 빠르게 교체"
summary: "텍스트 객체로 HTML 태그 내용물을 정확히 편집합니다."
order: 6
difficulty: "초급"
tags: ["HTML", "텍스트 객체"]
practice: true
practiceFile: "example06.md"
---

## 상황

HTML에서 제목, 링크, 버튼 텍스트 등 **태그 안의 내용**만 바꿔야 합니다.

```html
<h1>Welcome</h1>
<p>Click <a href="/signup">here</a> to start.</p>
<button>Submit</button>
```

## 태그 텍스트 객체

```
cit   → change inner tag : 태그 안 내용 교체
dit   → delete inner tag
yat   → yank inner tag
dat   → delete around tag (태그 포함)
```

`t` 객체는 **태그 안쪽 전체**를 대상으로 하므로 커서가 어디 있어도 편리합니다.

## 실전

1. `<h1>` 안에서 `cit` → `환영합니다<Esc>`
2. `<a>` 안에서 `cit` → `여기<Esc>`
3. `<button>` 안에서 `cit` → `제출<Esc>`

## 속성까지 바꾸기

속성 자체는 일반 편집으로 다룹니다.

```
:nnoremap <leader>cq vi"c   → 큰따옴표 안 속성값 교체
```

`vi"`(visual inner quote) 후 `c`로 교체합니다.

## 반복 태그 줄이기

`V`로 여러 줄을 선택하고 `gq`로 정리하거나, `:s`로 일괄 교체할 수 있습니다.

```
:%s/\v<h1>(.+)<\/h1>/\1/    → 태그 벗기기
```

## 연습

1. 각 태그 안에서 `cit`로 텍스트 교체
2. `dat`로 태그 포함 삭제
3. `ci"`로 속성값 교체
4. 태그 벗기기 치환 실행 후 `u` 복구

> 아래 실습의 예제 파일에서 바로 해보세요.
