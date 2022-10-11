# is-valid-array

check whether a given value is an array and its length is greater than 1

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
```
