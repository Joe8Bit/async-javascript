'use strict';

import request from './request';

async function loadUser() {
  return await request.get('user.json');
}

async function loadStories(userId) {
  return await request.get(userId + '/stories.json');
}

async function init() {
  let data = {};
  data.user = await loadUser();
  data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
  data.stories = await loadStories(data.user.id);
  return data;
};

(async () => {

  try {
    let data = await init();
    console.log('success', data);
  } catch(e) {
    console.log('error', e);
  }

}());