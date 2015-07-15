'use strict';

import request from './request';

function loadUser() {
  return request.get('user.json');
}

function loadStories(userId) {
  return request.get(userId + '/stories.json');
}

function init() {
  let data = {};

  return loadUser()
      .then((user) => {
        data.user = user;
        data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
        return loadStories(data.user.id);
      })
      .then((stories) => {
        data.stories = stories;
        return data;
      });

};

(() => {

  init()
    .then((data) => {
      console.log('success', data);
    })
    .catch((err) => {
      console.log('err', err);
    });

}());
