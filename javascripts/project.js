//Projects JS

const createProjectPage = (arrayOfProjects) => {
  let createAString = "";
  for(let i = 0; i < arrayOfProjects.length; i++){
    createAString += `<div class ='project-container'>`;
    createAString += `<img src='/images/thumbtack.png' alt='thumbtack' class='thumbtack'>`;
    createAString += `<img src='${arrayOfProjects[i].imageURL}' alt='${arrayOfProjects[i].altText}'>`;
    createAString += `<h3 class='project-title'>${arrayOfProjects[i].title}</h3>`;
    createAString += `<p class='project-description'>${arrayOfProjects[i].description}</p>`;
    createAString += `<a href='${arrayOfProjects[i].linkToPage}'>Click Here for more info!</a>`;
    createAString += `</div>`;
  };
  return createAString;
};

function ifProjectsFails(){
  console.log("Mistakes were made");
};

function ifProjectsLoads(){
  const myProjectData = JSON.parse(this.responseText);
  writeToDom(createProjectPage(myProjectData.projectArray),"project-main-container");
};

function startprojectsJS(){
  let myPRequest = new XMLHttpRequest();
  myPRequest.addEventListener('load', ifProjectsLoads);
  myPRequest.addEventListener('error', ifProjectsFails);
  myPRequest.open("GET", "../db/projects.json");
  myPRequest.send();
};

startprojectsJS();
