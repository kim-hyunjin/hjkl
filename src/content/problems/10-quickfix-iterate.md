---
title: "quickfix로 여러 파일 순회 수정"
summary: "검색 결과를 목록으로 만들어 원하는 위치만 순서대로 수정합니다."
order: 10
difficulty: "고급"
tags: ["quickfix", "일괄"]
practice: true
practiceFile: "example10.md"
---

## 상황

프로젝트 전체에서 `TODO`를 찾아 하나씩 확인·수정해야 합니다.

## quickfix 만들기

```
:vimgrep /TODO/ **/*.js
:copen
```

- `**/*.js` : 모든 하위 디렉터리 포함 JS 파일
- `:copen` : 결과 목록 창 열기

## 목록 탐색

| 명령 | 동작 |
| --- | --- |
| `:cnext` / `:cprev` | 다음 / 이전 결과 |
| `:cnfile` / `:cpfile` | 다음 / 이전 파일 |
| `:cfirst` / `:clast` | 처음 / 마지막 |
| `Ctrl+w w` | 목록 창과 편집 창 오가기 |

```
:nmap <leader>n :cnext<CR>
:nmap <leader>p :cprev<CR>
```

## 현재 위치 수정

quickfix에서 파일을 열면 해당 위치로 점프합니다. `ciw`로 단어를 바꾸고 `:cnext`로 계속합니다.

```
:cn | norm! ciwFIXED<Esc>
```

같은 패턴을 여러 곳에 적용할 때 유용합니다.

## 결과 필터

```
:vimgrep /TODO\c/ **/*.js | cw
:colder / :cnewer    → 이전 / 이후 검색 목록
```

대소문자 무시(`\c`), 특정 확장자 제외(`**/*.ts` 등)로 목록 범위를 조정합니다.

## open/list로 파일 중심 탐색

```
:grep TODO **/*.js    → 외부 grep 사용(더 빠름)
:Grepper               → 플러그인 버전
```

빠른 검색이 필요하면 `:grep`(grep 호출)을, 이식성이 필요하면 `:vimgrep`(내장)을 씁니다.

## 연습

1. 예제 파일에 `TODO`를 여러 개 추가
2. `:vimgrep /TODO/ %` 후 `:copen`
3. `:cnext`/`:cprev`로 이동하며 수정
4. `:colder`로 이전 목록 복원

quickfix는 대규모 리팩토링의 핵심입니다. 챌린지에서 더 연습해보세요.
