---
title: "플러그인과 Neovim"
summary: "플러그인 매니저와 Neovim 생태계를 이해하고 실무에 확장합니다."
order: 18
tags: ["플러그인", "Neovim"]
---

## 플러그인 개념

vim은 플러그인으로 기능을 확장합니다. 플러그인 매니저가 설치·업데이트·관리를 도와줍니다.

- Vim: vim-plug, Vundle, Pathogen
- Neovim: lazy.nvim, packer.nvim

## vim-plug 예시

`~/.vimrc`에 아래를 추가하고 `:PlugInstall` 실행.

```
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'          " 파일 트리
Plug 'vim-airline/vim-airline'     " 상태바
Plug 'junegunn/fzf.vim'            " 파일 검색
call plug#end()
```

## Neovim과 lazy.nvim

Neovim은 Lua로 설정하며, lazy.nvim이 현재 사실상 표준입니다.

```lua
-- ~/.config/nvim/init.lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
vim.opt.rtp:prepend(lazypath)
require("lazy").setup({
  { "nvim-treesitter/nvim-treesitter", build = ":TSUpdate" },
  { "nvim-lspconfig" },          -- LSP
  { "hrsh7th/nvim-cmp" },        -- 자동완성
  { "folke/tokyonight.nvim" },   -- 테마
  { "nvim-telescope/telescope.nvim", dependencies = { "nvim-lua/plenary.nvim" } },
  { "lewis6991/gitsigns.nvim" },
  { "tpope/vim-fugitive" },      -- git
})
```

## 추천 플러그인 생태계

| 용도 | 플러그인 |
| --- | --- |
| 파일 탐색 | NERDTree, oil.nvim |
| 퍼지 검색 | fzf.vim, Telescope |
| 문법 강조 | vim-polyglot, Treesitter |
| LSP/자동완성 | coc.nvim, nvim-lspconfig |
| git 통합 | vim-fugitive, gitsigns |
| 상태바 | vim-airline, lualine |
| 테마 | tokyonight, gruvbox |

## Vim vs Neovim

| | Vim | Neovim |
| --- | --- | --- |
| 설정 | vimscript | Lua (강력) |
| LSP | 느슨한 통합 | 내장 클라이언트 |
| 터미널 지원 | 구버전 제한 | 내장 터미널 |
| 커뮤니티 | 성숙 | 매우 활발 |

## 기본기와 플러그인

플러그인은 생산성을 높이지만, **기본 vim 명령을 대체하지 않습니다.** 플러그인 없이도 편하게 쓸 수 있을 때 비로소 추가하는 것이 좋은 전략입니다.

## 연습

1. vim-plug 또는 lazy.nvim 설치
2. 테마, 파일 트리, 퍼지 검색 플러그인 추가
3. LSP 설정으로 자동완성 활성화
4. 설정을 git 저장소로 관리

지금까지 심화 과정을 마쳤습니다. 이제 **실전예제**와 **챌린지**로 넘어가 실무 감각을 키워보세요.
