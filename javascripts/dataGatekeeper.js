const events = require('./events');
const apiKeys = require('./apiKeys');

const startApplication = () => {
  events.attachEventHandler();
  apiKeys.retrieveKeys();
  $('#blog-content, #project-content, #funfact-content, #resume-content').hide();
};

module.exports = startApplication;
