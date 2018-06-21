const writeToDom = require('./writeToDom');

const buildProjects = (projectData) => {
  let domString = '';
  projectData.forEach((project) => {
    domString += `<div class="panel panel-default project-container">`;
    domString +=   `<div class="panel-heading">`;
    domString +=     `<h1 class="panel-title">${project.title}</h1>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<img src="${project.thumbnail}" alt="Project Screenshot" class="project-img">`;
    domString +=     `<p>${project.description}</p>`;
    domString +=     `<ul>`;
    project.technologiesUsed.forEach((tech) => {
      domString += `<li>${tech}</li>`;
    });
    domString +=     `</ul>`;
    domString +=   `</div>`;
    domString +=   `<div class="panel-footer">`;
    if (project.url !== '') {
      domString +=   `<a href="${project.url}">Check me out!</a>`;
    };
    domString +=     `<a href="${project.github}">Look at the code here!</a>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  writeToDom.writeToDom(domString, '#project-content');
};

module.exports = {
  buildProjects,
};
