(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const firebaseApi = require('./firebaseAPI');
const events = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/apiKeys.json')
      .done((data) => {
        resolve(data);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebaseApi.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
      events.getAllBlogDataEvent();
      events.getAllProjectDataEvent();
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};

},{"./events":4,"./firebaseAPI":5}],2:[function(require,module,exports){
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

},{"./writeToDom":8}],3:[function(require,module,exports){
const events = require('./events');
const apiKeys = require('./apiKeys');

const startApplication = () => {
  events.attachEventHandler();
  apiKeys.retrieveKeys();
  $('#blog-content, #project-content, #funfact-content, #resume-content').hide();
};

module.exports = startApplication;

},{"./apiKeys":1,"./events":4}],4:[function(require,module,exports){
const blogData = require('./blog');
const projectData = require('./projects');
const firebaseApi = require('./firebaseAPI');

const attachEventHandler = () => {
  $('#blog-btn').on('click', writeBlogs);
  $('#project-btn').on('click', writeProjects);
  $('#resume-btn').on('click', writeResume);
  $('#funFact-btn').on('click', writeFunFact);
  $('#index-page').on('click', indexPage);
};

const indexPage = () => {
  $('#main-content').show();
  $('#blog-content, #project-content, #resume-content, #funfact-content').hide();
};

const writeBlogs = () => {
  $('#blog-content').show();
  $('#main-content, #project-content, #resume-content, #funfact-content').hide();
};

const writeProjects = () => {
  $('#project-content').show();
  $('#main-content, #blog-content,  #resume-content, #funfact-content').hide();
};

const writeResume = () => {
  $('#resume-content').show();
  $('#main-content, #blog-content, #project-content, #funfact-content').hide();
};

const writeFunFact = () => {
  $('#funfact-content').show();
  $('#main-content, #blog-content, #project-content, #resume-content').hide();
};

const getAllBlogDataEvent = () => {
  firebaseApi.getAllBlogData()
    .then((dataArray) => {
      blogData.buildBlog(dataArray);
    })
    .catch((error) => {
      console.error('error in get all data', error);
    });
};

const getAllProjectDataEvent = () => {
  firebaseApi.getAllProjectData()
    .then((dataArray) => {
      projectData.buildProjects(dataArray);
    })
    .catch((error) => {
      console.error('error in get all data', error);
    });
};

module.exports = {
  attachEventHandler,
  getAllBlogDataEvent,
  getAllProjectDataEvent,
};

},{"./blog":2,"./firebaseAPI":5,"./projects":7}],5:[function(require,module,exports){
let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getAllProjectData = () => {
  return new Promise((resolve, reject) => {
    const allDataArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projectArray.json`,
    })
      .done((allDataObj) => {
        if (allDataObj !== null) {
          Object.keys(allDataObj).forEach((fbKey) => {
            allDataObj[fbKey].id = fbKey;
            allDataArray.push(allDataObj[fbKey]);
          });
        };
        resolve(allDataArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllBlogData = () => {
  return new Promise((resolve, reject) => {
    const allDataArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done((allDataObj) => {
        if (allDataObj !== null) {
          Object.keys(allDataObj).forEach((fbKey) => {
            allDataObj[fbKey].id = fbKey;
            allDataArray.push(allDataObj[fbKey]);
          });
        };
        resolve(allDataArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllBlogData,
  getAllProjectData,
};

},{}],6:[function(require,module,exports){
const startApplication = require('./dataGatekeeper');

startApplication();

},{"./dataGatekeeper":3}],7:[function(require,module,exports){
const writeToDom = require('./writeToDom');

const buildProjects = (projectData) => {
  console.log('Project Data: ', projectData);
  let domString = '';
  projectData.forEach((project) => {
    domString += `<div class="panel panel-default project-container">`;
    domString +=   `<div class="panel-heading">`;
    domString +=     `<h1 class="panel-title">${project.title}</h1>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<img src="${project.imageURL}" alt="${project.altText}" class="project-img">`;
    domString +=     `<p>${project.description}</p>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-footer">`;
    domString +=     `<a>${project.linkToPage}</a>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  writeToDom.writeToDom(domString, '#project-content');
};

module.exports = {
  buildProjects,
};

},{"./writeToDom":8}],8:[function(require,module,exports){
const writeToDom = (myString, myElement) => {
  $(myElement).html(myString);
};

module.exports = {
  writeToDom,
};

},{}]},{},[6]);
