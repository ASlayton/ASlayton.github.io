const firebaseApi = require('./firebaseAPI');
const events = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/apiKeys.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebaseApi.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
      events.getAllBlogDataEvent();
      events.getAllProjectDataEvent();
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
