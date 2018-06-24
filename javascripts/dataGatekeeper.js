const events = require('./events');
const apiKeys = require('./apiKeys');

const startApplication = () => {
  events.attachEventHandler();
  apiKeys.retrieveKeys();
  $('#blog-main-content, #project-main-content, #funfact-content, #resume-content, #contact-content').hide();
};

module.exports = startApplication;
