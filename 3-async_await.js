'use strict';

import request from './request';

async function init() {
  let data = {};
  data.user = await request.get('user.json');
  data.user.greeting = `Hi ${data.user.firstName}, Welcome to Foobar.com!`;
  data.stories = await request.get(`${data.user.id}/stories.json`);
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
