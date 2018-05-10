const blogData = require('./blog');
const projectData = require('./projects');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
};

const writeBlogs = () => {
  $('#blog-content').append(blogData.buildBlog()).show();
  $('#main-content, #project-content').hide();
};

const writeProjects = () => {
  $('#project-content').append(projectData.buildProjects()).show();
  $('#main-content, #blog-content').hide();
};

module.exports = {
  attachEventHandler,
};
