const blogData = require('./blog');

const attachEventHandler = () => {
  console.log('I have gotten this far.');
  $('#blog-btn').on('click', writeBlogs);
};

const writeBlogs = () => {
  console.log('button has been pressed');
  $('#place-content-here').append(blogData.buildBlog());
};

module.exports = attachEventHandler;
