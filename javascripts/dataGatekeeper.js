const xhr = require('./xhr');
const data = require('./data');
const blog = require('./blog');

const startApplication = () => {
  console.log('Im being called');
  xhr(whenBlogsLoad, ifFileFails, './db/blog.json');
  xhr(whenProjectsLoad, ifFileFails, './db/projects.json');
  xhr(whenJobsLoads, ifFileFails, './db/jobs.json');
  attachEventListeners();
};

const attachEventListeners = () => {
  document.getElementById('blog-btn').addEventListener('click', blog.buildBlog);
  // document.getElementById('project-btn').addEventListener('click', );
  // document.getElementById('contact-btn').addEventListener('click', );
  // document.getElementById('resume-btn').addEventListener('click', );
  // document.getElementById('funFact-btn').addEventListener('click', );
};

const whenBlogsLoad = function () {
  const myData = JSON.parse(this.responseText);
  data.setBlogData(myData);
  const varExists = document.getElementById('blog-container');
  if (varExists !== null) {
    blog.buildBlog();
  };
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
