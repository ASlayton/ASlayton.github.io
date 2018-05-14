const blogData = require('./blog');
const projectData = require('./projects');
const resumeData = require('./resume');
const factData = require('./funfact');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
  $('#resume-btn').on('click', writeResume);
  $('#funFact-btn').on('click', writeFunFact);
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
