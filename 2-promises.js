'use strict';

function loadUser() {
  return window.fetch('user.json', { method: 'GET' });
}

function loadStories(userId) {
  return window.fetch(userId + '/stories.json', { method: 'GET' });
}

function init() {
  var data = {};

  return new Promise(function(resolve, reject) {

    loadUser()
      .then(function(user) {
        data.user = user;
        data.user.greeting = `Hi ${data.firstName}, Welcome to Foobar.com!`;
        return loadStories(data.user.id);
      })
      .then(function(stories) {
        data.stories = stories;
        resolve(data);
      })
      .catch(reject);

  });

};