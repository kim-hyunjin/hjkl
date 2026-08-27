---
title: "JSON을 읽기 좋게 정리하기"
summary: "한 줄로 뭉친 JSON을 들여쓰기해 읽기 좋게 만듭니다."
order: 2
difficulty: "초급"
tags: ["JSON", "포맷"]
practice: true
practiceFile: "example02.md"
---

## 상황

API 응답이나 설정 파일이 한 줄로 뭉쳐 있어 읽기 어렵습니다.

```json
{"name":"hjkl","version":1,"tags":["vim","learn"],"deps":{"a":1,"b":2}}
```

## 해결 1: 외부 명령 필터

vim은 선택 영역이나 전체 버퍼를 셸 명령으로 보낼 수 있습니다.

```
:%!python3 -m json.tool
```

버퍼 전체를 `json.tool` 출력으로 교체해 들여쓰기된 JSON을 만듭니다.

## 해결 2: vim 자체 정렬/포맷

로컬에 `jq`가 있으면:

```
:%!jq .
```

숫자 정렬이 필요하면:

```
:%!jq -S .
```

## 인라인 함수로 포맷

마크다운 문서에 넣어두면 편합니다.

```
:nnoremap <leader>fj :%!python3 -m json.tool<CR>
```

## 주의

- JSON이 **유효하지 않으면** 명령이 실패하고 원본을 덮어쓸 수 있습니다.
- 실수 방지를 위해 필터 전에 `:w`로 저장해두세요.

## 연습

1. 한 줄 JSON을 예제 파일에 붙여넣기
2. `:%!python3 -m json.tool` 실행
3. 잘못된 JSON(콤마 누락)을 넣고 결과 확인
4. `u`로 복구

> 예제 파일은 아래 실습에서 열 수 있습니다.
