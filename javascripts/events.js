const blogData = require('./blog');
const projectData = require('./projects');
const firebaseApi = require('./firebaseAPI');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
  $('#resume-btn').on('click', writeResume);
  $('#funFact-btn').on('click', writeFunFact);
  $('#index-page').on('click', indexPage);
  $('#contact-btn').on('click', contactPage);
};

const contactPage = () => {
  $('#blog-main-content, #project-main-content, #resume-content, #funfact-content, #main-content').fadeOut();
  $('#contact-content').fadeIn();
};

const indexPage = () => {
  $('#blog-main-content, #project-main-content, #resume-content, #funfact-content, #contact-content').fadeOut();
  $('#main-content').fadeIn();
};

const writeBlogs = () => {
  $('#main-content, #project-main-content, #resume-content, #funfact-content, #contact-content').fadeOut();
  $('#blog-main-content').fadeIn();
};

const writeProjects = () => {
  $('#main-content, #blog-main-content,  #resume-content, #funfact-content, #contact-content').fadeOut();
  $('#project-main-content').fadeIn();
};

const writeResume = () => {
  $('#main-content, #blog-main-content, #project-main-content, #funfact-content, #contact-content').fadeOut();
  $('#resume-content').fadeIn();
};

const writeFunFact = () => {
  $('#main-content, #blog-main-content, #project-main-content, #resume-content, #contact-content').hide();
  $('#funfact-content').fadeIn();
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
