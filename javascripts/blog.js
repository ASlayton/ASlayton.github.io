const writeToDom = require('./writeToDom');

const buildBlog = (blogData) => {
  let domString = '';
  blogData.forEach((post) => {
    domString += `<div class='blog-post-container' id="${post.id}">`;
    domString += `<h3 col-md-6>${post.title}</h3>`;
    domString += `<h4 col-md-6 text-right>${post.date}</h4>`;
    domString += `<p>${post.post}</p>`;
    domString += `</div>`;
  });
  writeToDom.writeToDom(domString, '#blog-content');
};

const buildArchive = (blogData) => {
  let domString = '<img src="/images/clipboardimg.png"><ul><h3>Archive:</h3>';
  blogData.forEach((post) => {
    domString += `<li><a title="${post.title}" href="#${post.id}">${post.date}</a></li>`;
  });
  domString += '</ul>';
  writeToDom.writeToDom(domString, '#blog-archive');
};

module.exports = {
  buildBlog,
  buildArchive,
};
