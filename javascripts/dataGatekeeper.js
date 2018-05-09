const ajaxFunction = require('./xhr');
const data = require('./data');
const events = require('./events');

const startApplication = () => {
  console.log('I have gotten this far.');
  ajaxFunction('/db/blogs.json', loadBlog, onFileLoadError);
  ajaxFunction('/db/projects.json', loadProjects, onFileLoadError);
  events.attachEventHandler();
};

const onFileLoadError = () => {
  console.error('I have failed you, my friend.');
};

const loadBlog = (dataArray) => {
  data.setBlogData(dataArray);
};

const loadProjects = (dataArray) => {
  data.setProjectData(dataArray);
};

module.exports = startApplication;
