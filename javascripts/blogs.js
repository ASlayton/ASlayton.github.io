// BLOG JAVASCRIPT

const createBlogPost = (anArray) => {
  let createAString = "";
  for(var i = 0; i < anArray.length; i++){
    createAString += `<article class='blog-post'>`;
    createAString += `<img src='/images/thumbtack.png' alt='thumbtack' class='thumbtack'>`;
    createAString += `<h3 class='blog-date'>${anArray[i].date}<h3>`;
    createAString += `<h5 class='blog-title'>${anArray[i].title}<h5>`;
    createAString += `<p class='blog-body'>${anArray[i].post}</p>`;
    createAString += `</article>`;
  };
  return createAString;
};

function ifItFails(){
  console.log("Mistakes have been made.")
};

function ifItLoads(){
  const blogData = JSON.parse(this.responseText);
  writeToDom(createBlogPost(blogData.blogs),"blog-post-container");
};

function startApplication(){
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", ifItLoads);
  myRequest.addEventListener("error", ifItFails);
  myRequest.open("GET", "../db/blog.json");
  myRequest.send();
};

startApplication();
