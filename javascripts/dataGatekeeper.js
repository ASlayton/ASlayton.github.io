const xhr = require('./xhr');
const data = require('./data');

const startApplication = () => {
  xhr(whenBlogsLoad, ifFileFails, './db/blog.json');
  xhr(whenProjectsLoad, ifFileFails, './db/projects.json');
  xhr(whenJobsLoads, ifFileFails, './db/jobs.json');
};

const whenBlogsLoad = function () {
  const myData = JSON.parse(this.responseText);
  data.setBlogData(myData);
};

const whenProjectsLoad = function () {
  const myData = JSON.parse(this.responseText);
  data.setProjectData(myData);
};

const whenJobsLoads = function () {
  const myData = JSON.parse(this.responseText);
  data.setJobData(myData);
};

const ifFileFails = function () {
  console.error('I have failed you, my friend.');
};

module.exports = startApplication;
