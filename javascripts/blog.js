const writeToDom = require('./writeToDom');
const data = require('./data');

const buildBlog = () => {
  const blogPosts = data.getBlogData();
  let domString = '';
  blogPosts.forEach((post) => {
    domString += `<div class='blog-post-container'>`;
    domString += `<h4>${blogPosts.date}</h4>`;
    domString += `<h3>${blogPosts.title}</h3>`;
    domString += `<p>${blogPosts.post}</p>`;
    domString += `</div>`;
  });
  writeToDom(domString, 'blog-container');
};

module.exports = buildBlog;
