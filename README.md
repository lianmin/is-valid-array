# is-valid-array

<p>
  <img src="https://img.shields.io/npm/v/is-valid-array.svg">
  <img src="https://img.shields.io/npm/l/is-valid-array.svg" />
  <img src="https://img.shields.io/bundlephobia/min/is-valid-array/0.1.0.svg" />
</p>

checking whether a given value is a non-empty array.

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
isValidArray([1]); //true
isValidArray([{}]); //true
isValidArray([[]]); //true
```
