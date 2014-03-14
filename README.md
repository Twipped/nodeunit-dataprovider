nodeunit-dataprovider
===

A quick solution for generating sets of repeating tests using an array of input data.

##Node.js

To install:

	npm install nodeunit-dataprovider

To use:

```js
var dataprovider = require('nodeunit-dataprovider');
```


##Example:

```js
var dataprovider = require('nodeunit-dataprovider');

exports['doubled result'] = dataprovider(
	[
		{input: 4,  output: 8},
		{input: 8,  output: 16},
		{input: 16, output: 32}
	],

	function (test, data) {
		test.strictEqual(data.input * 2, data.output);
		test.done();
	}
);
```


```
$ nodeunit test.js

test.js
✔ doubled result - #0: {"input":4,"output":8}
✔ doubled result - #1: {"input":8,"output":16}
✔ doubled result - #2: {"input":16,"output":32}

OK: 3 assertions (6ms)
```