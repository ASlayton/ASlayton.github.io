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
