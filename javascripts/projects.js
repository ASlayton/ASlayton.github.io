const data = require('./data');

const buildProjects = () => {
  const projectData = data.getProjectData();
  let domString = '';
  projectData.forEach((project) => {
    domString += `<div class="panel panel-default project-container col-md-4">`;
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
  return domString;
};

module.exports = {
  buildProjects,
};
