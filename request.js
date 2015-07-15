'use strict';

// This is a very simple (and fragile) mock used to test both callback and promise based
// HTTP

const MAP = {
	'user.json': {
		id: 2,
		firstName: 'Steve'
	},
	'2/stories.json': [{
		foo: 'bar'
	}]
};

function callMeMaybe(url, next, isPromise) {
	setTimeout(function() {
		if (isPromise) {
			next(MAP[url]);
		} else {
			next(null, MAP[url]);
		}
	}, 100);
}

module.exports = function(url, next) {
	if (typeof next === 'function') {
		callMeMaybe(url, next, false);
	} else {
		return new Promise(function(resolve, reject) {
			callMeMaybe(url, resolve, true)
		});
	}
};
