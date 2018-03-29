// BLOG JAVASCRIPT

const createBlogPost = (anArray) => {
  let createAString = "";
  for(var i = 0; i < anArray.length; i++){
    createAString += `<article class='blog-post'>`;
    createAString += `<h3 class='blog-date'>${anArray[i].date}<h3>`;
    createAString += `<h5 class='blog-title'>${anArray[i].title}<h5>`;
    createAString += `<p class='blog-body'>${anArray[i].post}</p>`;
    createAString += `</article>`;
  };
  return createAString;
};

writeToDom(createBlogPost(blogs),"blog-post-container");
