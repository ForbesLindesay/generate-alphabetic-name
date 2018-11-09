# Generate Alphabetic Name

Take an arbitrary string or integer and generate a short alphabetic code. It works in the browser and node.js and is designed to be as small as possible, and extremely fast.

It uses the [murmurhash](https://github.com/garycourt/murmurhash-js) algorithm, and borrows its implementation from the code for generating class names in [styled-components](https://github.com/styled-components/styled-components)

## Installation

```
yarn add generate-alphabetic-name
```

## Usage

```js
import {readFileSync} from 'fs';
import generateAlphabeticName from './generateAlphabeticName';

console.log(generateAlphabeticName(readFileSync(__filename, 'utf8')));
console.log(generateAlphabeticName(42));
```

You can also just hash a string to a number:

```js
import {readFileSync} from 'fs';
import {hash} from './generateAlphabeticName';

console.log(hash(readFileSync(__filename, 'utf8')));
```

If you prefer, you can directly reference `generateAlphabeticNameFromNumber`:

```js
import {readFileSync} from 'fs';
import {hash, generateAlphabeticNameFromNumber} from './generateAlphabeticName';

console.log(
  generateAlphabeticNameFromNumber(hash(readFileSync(__filename, 'utf8'))),
);
```

## License

MIT
