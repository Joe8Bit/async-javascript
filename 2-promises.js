'use strict';

let request = require('./request');

function loadUser() {
  return request('user.json', { method: 'GET' });
}

function loadStories(userId) {
  return request(userId + '/stories.json', { method: 'GET' });
}

function init() {
  let data = {};

  return new Promise(function(resolve, reject) {

    loadUser()
      .then(function(user) {
        data.user = user;
        data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
        return loadStories(data.user.id);
      })
      .then(function(stories) {
        data.stories = stories;
        resolve(data);
      })
      .catch(reject);

  });

};

(function() {
  init()
    .then(function(data) {
      console.log('success', data);
    })
    .catch(function(err) {
      console.log('err', err);
    });
}());