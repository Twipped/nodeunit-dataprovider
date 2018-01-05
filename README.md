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


exports['doubled result with named doubles'] = dataprovider(
	{
		Set1: {input: 4, output: 8},
		Set2: {input: 8, output: 16},
		Set3: {input: 16, output: 32}
	},

	function (test, data, index) {
		test.strictEqual(data.input * 2, data.output);
		test.done();
	}
);
```

```
$ nodeunit test.js

test.js
✔ doubled result - #0: {"input":4,"output": ...
✔ doubled result - #1: {"input":8,"output": ...
✔ doubled result - #2: {"input":16,"output" ...
✔ doubled result with named doubles - #0: Set1
✔ doubled result with named doubles - #1: Set2
✔ doubled result with named doubles - #2: Set3

OK: 6 assertions (14ms)
```
