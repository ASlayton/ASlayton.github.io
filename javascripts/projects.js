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
