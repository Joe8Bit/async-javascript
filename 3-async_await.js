'use strict';

async function loadUser() {
  let user = await window.fetch('user.json', { method: 'GET' });
  user.greeting = `Hi ${user.firstName}, Welcome to Foobar.com!`;
  return user;
}

async function loadStories(userId) {
  return await window.fetch(userId + '/stories.json', { method: 'GET' });
}

async function init() {
  let data = {};
  data.user = await loadUser();
  data.stories = await loadStories(data.user.id);

  return data;
};

