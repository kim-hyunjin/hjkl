---
title: "diff와 병합 — git과 함께 쓰기"
summary: "vimdiff로 파일 차이를 보고 병합하는 방법을 배웁니다."
order: 17
tags: ["diff", "병합", "git"]
---

## vimdiff

두 파일의 차이를 vim으로 비교할 수 있습니다.

```
$ vimdiff a.txt b.txt
$ vim -d a.txt b.txt
```

vim은 차이를 색상으로 보여주고, 차이 지점 사이를 이동하며 한쪽 내용을 가져올 수 있습니다.

| 명령 | 동작 |
| --- | --- |
| `]c` | 다음 diff로 이동 |
| `[c` | 이전 diff로 이동 |
| `do` | 다른 쪽(diff obtain)에서 현재 창으로 가져오기 |
| `dp` | 현재 창을 다른 쪽으로 푸시 |
| `:diffupdate` | diff 강제 갱신 |
| `zo / zc` | diff 접기 열기/닫기 |

## 3-way 병합

git 충돌 시 기본 편집기로 vim을 쓰면 3-way 병합이 제공됩니다.

```
$ git mergetool -t vimdiff
```

git이 `MERGE_HEAD`를 기준으로 각 쪽을 열어줍니다. `dp`/`do`로 취할 조각을 골라 저장합니다.

> **중요:** 병합 후 **중간 창**(병합 결과)을 저장하고 vim을 종료해야 합니다. git이 종료 상태를 보고 병합 완료를 결정합니다.

## git diff에서 사용

```
$ git difftool -t vimdiff
$ git diff | vim -
```

`vim -`는 표준 입력을 편집 버퍼로 읽습니다. git diff 출력을 바로 vim으로 넘길 수 있습니다.

## diff 모드 팁

- `:set diffopt+=iwhite` — 공백 차이 무시
- `:set scrollbind` — 창을 함께 스크롤
- `:windo diffthis` — 모든 창 diff 모드

## 연습

1. `vimdiff a.txt b.txt`로 두 파일 비교
2. `]c`/`[c`로 차이 이동
3. `dp`로 한쪽 내용 이동
4. `do`로 되돌리기

다음 강의는 **플러그인과 Neovim**으로 vim 생태계를 확장합니다.
