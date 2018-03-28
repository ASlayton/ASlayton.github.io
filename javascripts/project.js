//Projects JS

const createProjectPage = (arrayOfProjects) => {
  let createAString = "";
  for(let i = 0; i < arrayOfProjects.length; i++){
    createAString += `<article>`;
    createAString += `<div class ='project-container'>`;
    createAString += `<img src='${arrayOfProjects[i].imageURL}' alt='${arrayOfProjects[i].altText}'>`;
    createAString += `<h3 class='project-title'>${arrayOfProjects[i].title}</h3>`;
    createAString += `<p class='project-description'>${arrayOfProjects[i].description}</p>`;
    createAString += `<a href='${arrayOfProjects[i].linkToPage}'>Click Here for more info!</a>`;
    createAString += `</div>`;
    createAString += `</article>`;
  };
  return createAString;
};




writeToDom(createProjectPage(projectArray),"project-main-container");