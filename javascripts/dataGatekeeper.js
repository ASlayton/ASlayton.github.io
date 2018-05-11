const ajaxFunction = require('./xhr');
const data = require('./data');
const events = require('./events');

const startApplication = () => {
  ajaxFunction(loadBlog, onFileLoadError, './db/blog.json');
  ajaxFunction(loadProjects, onFileLoadError, './db/projects.json');
  ajaxFunction(loadJobs, onFileLoadError, './db/jobs.json');
  events.attachEventHandler();
};

const onFileLoadError = () => {
  console.log('error');
};

const loadBlog = (dataArray) => {
  data.setBlogData(dataArray);
};

const loadJobs = (dataArray) => {
  data.setJobData(dataArray);
};

const loadProjects = (dataArray) => {
  data.setProjectData(dataArray);
};

module.exports = startApplication;
