Javascript JSON Validator
===========================

[![Build Status](https://travis-ci.org/SparrowJang/javascript-json-validator.svg)](https://travis-ci.org/SparrowJang/javascript-json-validator)

## Spec Document

The specification document is at [spec project](https://github.com/SparrowJang/JSON-Validator-Specification).

## USAGE

This is basic usage：

```js
var jsonValidator = require('javascript-json-validator');

var inputValues = {
  id:'1',
  name:'sparrow'
};
var specProps = {
  id:{
    types:['string'],
    require:true
  }
};


jsonValidator.validate(inputValues, specProps);
```

Have not to be completed yet...

