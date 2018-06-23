const blogData = require('./blog');
const projectData = require('./projects');
const firebaseApi = require('./firebaseAPI');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
  $('#resume-btn').on('click', writeResume);
  $('#funFact-btn').on('click', writeFunFact);
  $('#index-page').on('click', indexPage);
};

const indexPage = () => {
  $('#main-content').show();
  $('#blog-main-content, #project-main-content, #resume-content, #funfact-content').hide();
};

const writeBlogs = () => {
  $('#blog-main-content').show();
  $('#main-content, #project-main-content, #resume-content, #funfact-content').hide();
};

const writeProjects = () => {
  $('#project-main-content').show();
  $('#main-content, #blog-main-content,  #resume-content, #funfact-content').hide();
};

const writeResume = () => {
  $('#resume-content').show();
  $('#main-content, #blog-main-content, #project-main-content, #funfact-content').hide();
};

const writeFunFact = () => {
  $('#funfact-content').show();
  $('#main-content, #blog-main-content, #project-main-content, #resume-content').hide();
};

const getAllBlogDataEvent = () => {
  firebaseApi.getAllBlogData()
    .then((dataArray) => {
      blogData.buildBlog(dataArray);
    })
    .catch((error) => {
      console.error('error in get all data', error);
    });
};

const getAllProjectDataEvent = () => {
  firebaseApi.getAllProjectData()
    .then((dataArray) => {
      projectData.buildProjects(dataArray);
    })
    .catch((error) => {
      console.error('error in get all data', error);
    });
};

module.exports = {
  attachEventHandler,
  getAllBlogDataEvent,
  getAllProjectDataEvent,
};
