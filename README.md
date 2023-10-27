# is-valid-array

[![](https://img.shields.io/npm/v/is-valid-array.svg)](https://npmjs.com/package/is-valid-array)
[![](https://codecov.io/gh/lianmin/is-valid-array/branch/main/graph/badge.svg?token=QY7KCCLR6P)](https://codecov.io/gh/lianmin/is-valid-array)
![](https://img.shields.io/bundlephobia/min/is-valid-array/0.1.0.svg)
![](https://img.shields.io/npm/l/is-valid-array.svg)

check whether a value is a non-empty array.

[Demo](https://lianmin.github.io/is-valid-array/)

## install

```bash
npm install is-valid-array --save
```

## usage

```jsx
import isValidArray from 'is-valid-array';

isValidArray([]); //false
isValidArray({}); //false
isValidArray(undefined); //false
isValidArray([undefined]); // true
isValidArray([{}]); //true
isValidArray([[]]); //true
isValidArray([0]); //true
isValidArray([1, 2, 3]); //true
```
