---
title: "로그 파일 빠르게 분석하기"
summary: "대용량 로그에서 에러 패턴을 찾고 정리하는 vim 워크플로를 배웁니다."
order: 3
difficulty: "고급"
tags: ["로그", "검색"]
practice: true
practiceFile: "example03.md"
---

## 상황

수천 줄의 로그에서 `ERROR`만 추려내고 원인을 추적해야 합니다.

## 1단계: 에러만 필터링

```
:vimgrep ERROR % 
:cwindow
```

- `:vimgrep` : 파일에서 패턴 검색 -> quickfix 목록
- `:cwindow` : quickfix 창 열기
- 엔터로 해당 위치로 점프

## 2단계: 고유 에러 코드 집계

`^E\d+` 형태의 에러 코드를 센다고 가정합니다.

```
:%!grep -o 'E[0-9]\+' | sort | uniq -c | sort -rn
```

버퍼 자체가 집계 결과로 바뀝니다. (원본은 `u`로 복구)

## 3단계: 타임라인 따라가기

```
/2026-08-26 22:
```

검색 후 `n`/`N`으로 시간순 이동합니다.

## 4단계: 원인 주변 보기

```
:g/ERROR/.,+5p   → ERROR 다음 5줄 출력
```

`g` 명령(global)은 패턴이 있는 줄을 찾아 명령을 실행합니다. `p`는 프린트(표시)입니다.

## 핵심 요약

| 명령 | 용도 |
| --- | --- |
| `:vimgrep` / `:cwindow` | 검색 결과 탐색 |
| `:%!grep ... | sort` | 버퍼를 파이프로 처리 |
| `:g/pattern/command` | 패턴 줄에 명령 실행 |
| `/pattern` + `n`/`N` | 순차 탐색 |

## 연습

1. 예제 로그에서 `:vimgrep ERROR %` 후 `:cwindow`
2. `:%!grep -o 'E[0-9]\+' | sort | uniq -c | sort -rn`
3. `:g/ERROR/.,+5p`로 주변 컨텍스트 확인
