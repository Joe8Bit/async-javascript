function loadUser(next) {

  window.fetch('user.json', { method: 'GET' })
      .then(function(user) {
        data.greeting = `Hi ${data.firstName}, Welcome to Foobar.com!`;
        next(null, user);
      })
      .catch(function(err) {
        next(err);
      });

}

function loadStories(userId, next) {

  window.fetch(userId + '/stories.json', { method: 'GET' })
      .then(function(stories) {
        next(null, stories);
      })
      .catch(function(err) {
        next(err);
      });

}

module.exports = function(next) {
  var data = {};

  loadUser(function(err, user) {
    if (err) {
      next(err);
    } else {
      data.user = user;
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