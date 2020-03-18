# Swedish postal code validator

Validates Swedish postal codes

![Tests][tests-badge]
[![NPM version][npm-image]][npm-url]

## Install

```
$ npm install --save swedish-postal-code-validator
```

## Usage

```js
import { isValid } from "swedish-postal-code-validator";

isValid("41663"); // => true
isValid("32663"); // => false
```

## License

MIT © [Jonathan Svenheden](https://github.com/svenheden)

[npm-url]: https://npmjs.org/package/swedish-postal-code-validator
[npm-image]: https://badge.fury.io/js/swedish-postal-code-validator.svg
[tests-badge]: https://github.com/svenheden/swedish-postal-code-validator/workflows/Tests/badge.svg
