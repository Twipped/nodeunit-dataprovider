
module.exports = function withProvider(data, testFunction) {
	var suite = {};
	var length = data.length;
	var name;
	for (var i=0; i<length; ++i) {
		name = JSON.stringify(data[i]);
		if (name.length > 20) {
			name = '#' + i + ': ' + name;
		} else {
			name = '#' + i;
		}
		suite[name] = (function(i){
			return function(test) {
				testFunction(test, data[i], i);
			};
		})(i);
	}

	return suite;
};
