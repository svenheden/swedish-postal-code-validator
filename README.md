# Swedish postal code validator

Validates Swedish postal codes


[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]


## Install

```
$ npm install --save swedish-postal-code-validator
```


## Usage

```js
import { isValid } from 'swedish-postal-code-validator';

isValid('41663') // => true
isValid('32663') // => false
```


## License

MIT © [Jonathan Persson](https://github.com/jonathanp)

[npm-url]: https://npmjs.org/package/swedish-postal-code-validator
[npm-image]: https://badge.fury.io/js/swedish-postal-code-validator.svg
[travis-image]: https://travis-ci.org/jonathanp/swedish-postal-code-validator.svg
[travis-url]: https://travis-ci.org/jonathanp/swedish-postal-code-validator