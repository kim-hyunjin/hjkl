---
title: "autocommand와 옵션"
summary: "파일 형식·이벤트에 반응하는 autocommand와 vimrc 옵션 설정을 배웁니다."
order: 16
tags: ["autocommand", "설정"]
---

## autocommand란

autocommand(줄여서 autocmd)는 **vim의 특정 이벤트가 발생했을 때** 명령을 자동 실행하는 기능입니다.

```
:autocmd {이벤트} {패턴} {명령}
```

## 자주 쓰는 이벤트

| 이벤트 | 발생 시점 |
| --- | --- |
| `BufRead` | 파일 읽을 때 |
| `BufWritePre` | 저장 직전 |
| `BufNewFile` | 새 파일 만들 때 |
| `FileType` | 파일 형식 결정될 때 |
| `CursorHold` | 일정 시간 입력 없을 때 |

## 예제

```
:autocmd FileType python setlocal expandtab shiftwidth=4
:autocmd BufWritePre *.js %s/\s\+$//e
```

- Python 파일을 열면 탭 대신 공백 4칸
- JS 파일 저장 전 줄 끝 공백 제거

## `augroup`으로 정리

autocmd를 여러 번 정의하면 중복 실행됩니다. **augroup**으로 묶어서 한 번만 정의하는 것이 정석입니다.

```
:augroup MyConfig
:  autocmd!
:  autocmd FileType markdown setlocal wrap
:  autocmd BufWritePre * %s/\s\+$//e
:augroup END
```

## vimrc에 넣기

`~/.vimrc`(또는 `~/.config/nvim/init.vim`)에 위 설정을 저장하면 매번 적용됩니다.

```
" ~/.vimrc
set number
set relativenumber
set tabstop=4
set shiftwidth=4
set expandtab
set hlsearch
set incsearch
set ignorecase smartcase
set scrolloff=5
syntax on
filetype plugin indent on
```

## 자주 쓰는 옵션

| 옵션 | 의미 |
| --- | --- |
| `number` / `relativenumber` | 줄 번호 / 상대 줄 번호 |
| `tabstop` | 탭 너비 |
| `shiftwidth` | 들여쓰기 너비 |
| `expandtab` | 탭을 공백으로 |
| `hlsearch` / `incsearch` | 검색 하이라이트 / 점진 검색 |
| `ignorecase smartcase` | 대소문자 무시하되 대문자 있으면 구분 |
| `scrolloff` | 화면 끝에서 유지할 여백 |
| `wildmenu` | 명령행 자동완성 메뉴 |

## 매핑(mapping)

자주 쓰는 동작은 키에 매핑할 수 있습니다.

```
:nnoremap <Space> za        → Space로 접기 토글
:nnoremap <C-h> <C-w>h      → Ctrl+h로 창 이동
:inoremap jj <Esc>          → jj 연타로 입력 모드 탈출
```

`nnoremap`의 `nore`는 "재귀 없이"라는 뜻으로, 기본 동작을 덮어쓰는 안전한 매핑입니다.

## 연습

1. `:set number relativenumber` 적용
2. `:nnoremap jj <Esc>` 등록 후 `jj`로 탈출
3. `:autocmd FileType markdown setlocal wrap` 실행
4. 설정을 vimrc에 저장해 재부팅 후에도 유지 확인

다음 강의는 **diff와 병합**으로 git과 함께 쓰는 법을 배웁니다.
