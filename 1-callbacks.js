'use strict';

// Assume we have some getJSON method that handles HTTP, vaugley analogous to $.getJSON 

function loadUser(next) {
  getJSON('user.json', next);
}

function loadStories(userId, next) {
  getJSON(userId + '/stories.json', next);
}

function init(next) {
  var data = {};

  loadUser(function(err, user) {
    if (err) {
      next(err);
    } else {
      data.user = user;
      data.user.greeting = `Hi ${data.firstName}, Welcome to Foobar.com!`;
      loadStories(data.user.id, function(err, stories) {
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