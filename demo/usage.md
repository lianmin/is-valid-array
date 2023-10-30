---
title: 基础用法
order: 1
---

# 使用示例

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import isValidArray from 'is-valid-array';

class App extends Component {
  render() {
    return (
      <div>
        <p>
          <code>isValidArray(undefined)</code> => <code>{`${isValidArray(undefined)}`}</code>
        </p>
        <p>
          <code>isValidArray([])</code> => <code>{`${isValidArray([])}`}</code>
        </p>
        <p>
          <code>{`isValidArray([{}])`}</code> => <code>{`${isValidArray([{}])}`}</code>
        </p>
        <p>
          <code>isValidArray([1])</code> => <code>{`${isValidArray([1])}`}</code>
        </p>
        <p>
          <code>isValidArray({})</code> => <code>{`${isValidArray({})}`}</code>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
```
