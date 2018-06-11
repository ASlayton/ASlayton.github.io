const writeToDom = require('./writeToDom');

const buildBlog = (blogData) => {
  console.log('Blog data: ', blogData);
  let domString = '';
  blogData.forEach((post) => {
    domString += `<div class='blog-post-container'>`;
    domString += `<h3 col-md-6>${post.title}</h3>`;
    domString += `<h4 col-md-6 text-right>${post.date}</h4>`;
    domString += `<p>${post.post}</p>`;
    domString += `</div>`;
  });
  writeToDom.writeToDom(domString, '#blog-content');
};

module.exports = {
  buildBlog,
};
