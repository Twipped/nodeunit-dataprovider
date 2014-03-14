
var dataprovider = require('./index.js');

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