---
title: "CommonJS require를 ES 모듈 import로 변환"
summary: "레거시 Node.js 코드베이스를 ESM으로 옮길 때 마주치는, 캡처 그룹 정규식 치환 챌린지입니다."
order: 19
difficulty: "고급"
tags: ["치환", "정규식"]
practice: true
practiceFile: "problems/problem21.md"
answer: |
  :%s/^const \(.*\) = require(\(.*\));$/import \1 from \2;/
  (\1은 좌변 바인딩 형태 전체를 그대로 캡처하므로 기본 import든 구조 분해든
  똑같이 살아남고, \2는 괄호 안 문자열 리터럴을 그대로 옮겨줍니다)
---

## 목표

레거시 Node.js 스크립트를 ESM(`"type": "module"`)으로 옮기는 중입니다. 다음 `require` 구문을 모두 `import` 구문으로 바꾸세요.

```js
const fs = require('fs');
const path = require('path');
const { readFile, writeFile } = require('fs/promises');
const express = require('express');
```

결과:

```js
import fs from 'fs';
import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import express from 'express';
```

## 조건

- `:%s/패턴/치환/` 한 번으로 네 줄을 모두 변환(줄마다 손으로 고치지 않기)
- 기본 import(`fs`, `path`, `express`)와 구조 분해 import(`{ readFile, writeFile }`)를 캡처 그룹으로 구분 없이 함께 처리
- 모듈 경로 문자열의 따옴표와 줄 끝 세미콜론은 그대로 유지
