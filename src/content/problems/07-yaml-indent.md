---
title: "YAML 들여쓰기와 키 정렬"
summary: "들여쓰기로 의미가 결정되는 YAML을 실수 없이 편집합니다."
order: 7
difficulty: "중급"
tags: ["YAML", "들여쓰기"]
practice: true
practiceFile: "example07.md"
---

## 상황

YAML은 들여쓰기가 곧 데이터 구조입니다. 수동 편집 시 키가 잘못 들어가면 구조가 깨집니다.

```yaml
name: hjkl
settings:
  theme: dark
  locale: ko
```

## 들여쓰기 옵션

```
:set shiftwidth=2
:set expandtab
:set autoindent
```

- `shiftwidth=2` : 한 단계 들여쓰기 = 공백 2칸
- `expandtab` : 탭을 공백으로
- `autoindent` : 새 줄에서 이전 들여쓰기 유지

## 빠르게 들여쓰기

비주얼 선택 후 `>` 나 `<` 로 조정합니다.

```
V
j j
>
```

선택한 줄들이 한 단계 들여써집니다. `.`로 반복합니다.

## 키 정렬은 정규식으로

키와 값을 정렬하고 싶다면:

```
:%!python3 -c "import sys,yaml; print(yaml.safe_dump(yaml.safe_load(sys.stdin), sort_keys=True, allow_unicode=True))"
```

로컬에 PyYAML이 필요합니다. 간단한 정렬은 필터가 더 낫습니다.

## 섹션 이동

`{`/`}`로 문단(섹션) 사이를 이동하고, `dd`로 섹션을 잘라 다른 곳에 `p`로 옮깁니다.

## 실수 방지

- `:set list`로 탭/공백 확인
- `:set filetype=yaml`로 문법 강조
- 저장 전 `:%s/\s\+$//`로 뒤 공백 제거(의미 없는 공백 제거)

## 연습

1. 예제 YAML에서 새 하위 키 추가(들여쓰기 2칸)
2. `V` 선택 후 `>`/`<`로 들여쓰기 조정
3. `{`/`}`로 섹션 이동
4. `dd`+`p`로 키 블록 이동
