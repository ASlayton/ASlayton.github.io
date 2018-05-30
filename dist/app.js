(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const blogData = require('./data');

const buildBlog = () => {
  const blogDataArray = blogData.getBlogData();
  let domString = '';
  blogDataArray.forEach((post) => {
    domString += `<div class='blog-post-container'>`;
    domString += `<h3 col-md-6>${post.title}</h3>`;
    domString += `<h4 col-md-6 text-right>${post.date}</h4>`;
    domString += `<p>${post.post}</p>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = {
  buildBlog,
};

},{"./data":2}],2:[function(require,module,exports){
let blogArray = [];
let projectArray = [];
let jobArray = [];

const setBlogData = (dataArray) => {
  blogArray = dataArray.blogs;
};

const setProjectData = (dataArray) => {
  projectArray = dataArray.projectArray;
};

const setJobData = (dataArray) => {
  jobArray = dataArray.jobs;
};

const getBlogData = (dataArray) => {
  return blogArray;
};

const getProjectData = (dataArray) => {
  return projectArray;
};

const getJobData = (dataArray) => {
  return jobArray;
};

module.exports = {
  setBlogData,
  setProjectData,
  setJobData,
  getBlogData,
  getProjectData,
  getJobData,
};

},{}],3:[function(require,module,exports){
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

},{"./data":2,"./events":4,"./xhr":9}],4:[function(require,module,exports){
const blogData = require('./blog');
const projectData = require('./projects');
const resumeData = require('./resume');
const factData = require('./funfact');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
  $('#resume-btn').on('click', writeResume);
  $('#funFact-btn').on('click', writeFunFact);
  $('#index-page').on('click', indexPage);
};

const indexPage = () => {
  $('#main-content').show();
  $('#blog-content, #project-content, #resume-content, #funfact-content').hide();
};

const writeBlogs = () => {
  $('#blog-content').append(blogData.buildBlog()).show();
  $('#main-content, #project-content, #resume-content, #funfact-content').hide();
};

const writeProjects = () => {
  $('#project-content').append(projectData.buildProjects()).show();
  $('#main-content, #blog-content,  #resume-content, #funfact-content').hide();
};

const writeResume = () => {
  $('#resume-content').append(resumeData.buildResume()).show();
  $('#main-content, #blog-content, #project-content, #funfact-content').hide();
};

const writeFunFact = () => {
  $('#funfact-content').append(factData.buildFunFact()).show();
  $('#main-content, #blog-content, #project-content, #resume-content').hide();
};

module.exports = {
  attachEventHandler,
};

},{"./blog":1,"./funfact":5,"./projects":7,"./resume":8}],5:[function(require,module,exports){
const buildFunFact = () => {
  let domString = '';
  domString += `<h1>Random Fun Fact About Me:</h1>`;
  domString += `<p>When I was a kid, we had gotten my mom a pair of Madagascar Hissing Cockroaches as a joke present. She had the opposite reaction than we expected and before long, had 82 pet cockroaches.</p>`;
  domString += `<img src='/images/cockroach.jpg' alt='Madagascar Hissing Cockroach'>`;

  return domString;
};

module.exports = {
  buildFunFact,
};

},{}],6:[function(require,module,exports){
const startApplication = require('./dataGatekeeper');

startApplication();

},{"./dataGatekeeper":3}],7:[function(require,module,exports){
const data = require('./data');

const buildProjects = () => {
  const projectData = data.getProjectData();
  let domString = '';
  projectData.forEach((project) => {
    domString += `<div class="panel panel-default project-container col-md-4">`;
    domString +=   `<div class="panel-heading">`;
    domString +=     `<h1 class="panel-title">${project.title}</h1>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<img src="${project.imageURL}" alt="${project.altText}" class="project-img">`;
    domString +=     `<p>${project.description}</p>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-footer">`;
    domString +=     `<a>${project.linkToPage}</a>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  return domString;
};

module.exports = {
  buildProjects,
};

},{"./data":2}],8:[function(require,module,exports){
const data = require('./data');

const buildResume = () => {
  const resumeArray = data.getJobData();
  let domString = '';
  resumeArray.forEach((job) => {
    domString += `<div class="job-container">`;
    domString +=   `<h3 class="col-md-6">${job.name}</h3>`;
    domString += `<p class="col-md-6">${job.startDate} - ${job.endDate}</p>`;
    domString += `<p>${job.title}</p>`;
    domString += `<p>Responsibility:</p>`;
    domString += `<ul>`;
    job.responsibility.forEach((task) => {
      domString += `<li>${task}</li>`;
    });
    domString += `</div>`;
  });
  return domString;
};

module.exports = {
  buildResume,
};

},{"./data":2}],9:[function(require,module,exports){
const ajaxFunction = (whenFileLoads, whenFileFails, filename) => {
  $.get(`${filename}`)
    .done(whenFileLoads)
    .fail(whenFileFails);
};

module.exports = ajaxFunction;

},{}]},{},[6]);
