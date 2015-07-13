// Create an asyncrhonous function using the ES7 syntax
// If fetch rejects, loadUser will throw an exception with the arugments passed to reject
async function loadUser() {
  let user = await window.fetch('user.json', { method: 'GET' }); // fetch returns a promise
  user.greeting = `Hi ${user.firstName}, Welcome to Foobar.com!`;
  return user;
}

async function loadStories(userId) {
  return await window.fetch(userId + '/stories.json', { method: 'GET' });
}

// Export a function that is also async
module.exports = async function() {
  let data = {};
  data.user = await loadUser();
  data.stories = await loadStories(data.user.id);

  return data;
};

