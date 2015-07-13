'use strict';

function loadUser() {
  return new Promise(function(resolve, reject) {

    window.fetch('user.json', { method: 'GET' })
      .then(function(data) {
        data.greeting = `Hi ${data.firstName}, Welcome to Foobar.com!`;
        resolve(data);
      })
      .catch(reject);

  });
}

function loadStories(userId) {
  return new Promise(function(resolve, reject) {

    window.fetch(userId + '/stories.json', { method: 'GET' })
}

function init() {
  var data = {};

  return new Promise(function(resolve, reject) {

    loadUser()
      .then(function(user) {
        data.user = user;
        return loadStories(data.user.id);
      })
      .then(function(stories) {
        data.stories = stories;
        resolve(data);
      })
      .catch(reject);

  });

};