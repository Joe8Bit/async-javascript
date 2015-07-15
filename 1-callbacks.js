'use strict';

import request from './request';

function loadUser(next) {
  request('user.json', next);
}

function loadStories(userId, next) {
  request(userId + '/stories.json', next);
}

function init(next) {
  let data = {};

  loadUser((err, user) => {
    if (err) {
      next(err);
    } else {
      data.user = user;
      data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
      loadStories(data.user.id, (err, stories) => {
        if (err) {
          next(err);
        } else {
          data.stories = stories
          next(null, data);
        }
      });
    }
  });

};

(() => {

  init((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

}());
