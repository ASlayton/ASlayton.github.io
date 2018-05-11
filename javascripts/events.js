const blogData = require('./blog');
const projectData = require('./projects');
const resumeData = require('./resume');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
  $('#resume-btn').on('click', writeResume);
};

const writeBlogs = () => {
  $('#blog-content').append(blogData.buildBlog()).show();
  $('#main-content, #project-content, #resume-content').hide();
};

const writeProjects = () => {
  $('#project-content').append(projectData.buildProjects()).show();
  $('#main-content, #blog-content, #resume-content').hide();
};

const writeResume = () => {
  $('#resume-content').append(resumeData.buildResume()).show();
  $('#main-content, #blog-content, #project-content').hide();
};

module.exports = {
  attachEventHandler,
};
