var dataprovider = require('./index.js');

exports['doubled result'] = dataprovider(
	[
		{input: 4, output: 8},
		{input: 8, output: 16},
		{input: 16, output: 32}
	],

	function (test, data, index) {
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
