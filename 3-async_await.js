'use strict';

async function loadUser() {
  return await window.fetch('user.json', { method: 'GET' });
}

async function loadStories(userId) {
  return await window.fetch(userId + '/stories.json', { method: 'GET' });
}

async function init() {
  let data = {};
  data.user = await loadUser();
  data.user.greeting = `Hi ${user.firstName}, Welcome to Foobar.com!`;
  data.stories = await loadStories(data.user.id);
  return data;
};

try {
	let data = await init();
} catch(e) {
	// handle error
}