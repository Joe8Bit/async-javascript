'use strict';

import request from './request';

function loadUser() {
  return request('user.json', { method: 'GET' });
}

function loadStories(userId) {
  return request(userId + '/stories.json', { method: 'GET' });
}

function init() {
  let data = {};

  return loadUser()
      .then(function(user) {
        data.user = user;
        data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
        return loadStories(data.user.id);
      })
      .then(function(stories) {
        data.stories = stories;
        return data;
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