'use strict';

// This is a very simple (and fragile) mock used to test both callback and promise based
// HTTP

class Request {

	map = new Map()
				.set('user.json', {
					id: 2,
					firstName: 'Steve'
				})
				.set('2/stories.json', [{
					foo: 'bar'
				}])

	constructor() {}

	callMeMaybe(url, next, isPromise = false) {
		setTimeout(() => {
			if (isPromise) {
				next(this.map.get(url));
			} else {
				next(null, this.map.get(url));
			}
		}, 100);
	}

	get(url, next) {
		if (next) {
			this.callMeMaybe(url, next);
		} else {
			return new Promise((resolve, reject) => {
				this.callMeMaybe(url, resolve, true)
			});
		}
	}

}

module.exports = new Request();
