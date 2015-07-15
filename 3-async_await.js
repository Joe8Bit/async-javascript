'use strict';

import request from './request';

async function loadUser() {
  return await request('user.json', { method: 'GET' });
}

async function loadStories(userId) {
  return await request(userId + '/stories.json', { method: 'GET' });
}

async function init() {
  let data = {};
  data.user = await loadUser();
  data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
  data.stories = await loadStories(data.user.id);
  return data;
};

(async function() {

  try {
    let data = await init();
    console.log('success', data);
  } catch(e) {
    console.log('error', e);
  }

}());