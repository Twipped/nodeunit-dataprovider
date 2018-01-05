module.exports = function withProvider(data, testFunction) {
	var suite = {};

	function addToSuite(label, data, index) {
		suite[label] = (function (data, index) {
			return function (test) {
				testFunction(test, data, index);
			};
		})(data, index);
	}

	if (data instanceof Array) {
		var length = data.length;
		for (var index = 0; index < length; ++index) {
			var name = JSON.stringify(data[index]);
			addToSuite('#' + index + ': ' + name.substr(0, 20) + (name.length > 20 ? ' ...' : ''), data[index], index);
		}
	} else {
		var index = 0;
		for (var name in data) {
			if (data.hasOwnProperty(name)) {
				addToSuite('#' + index++ + ': ' + name, data[name], name);
			}
		}
	}

	return suite;
};
