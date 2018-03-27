//Projects JS


const projectArray = [
  {
    imageURL:    "/images/ayeaye.jpg",
    altText:     "Aye Aye Captain",
    title:       "Lemuria",
    description: "Everybody needs a friend. Learn when to stop. There's not a thing in the world wrong with washing your brush.",
    linkToPage:  "index.html"    
  },
  {
    imageURL:    "/images/cat_w_recipe_book.jpg",
    altText:     "Cat with Recipe Book",
    title:       "Recipe Book",
    description: "Let that brush dance around there and play. It looks so good, I might as well not stop. Isn't it fantastic that you can change your mind and create all these happy things?",
    linkToPage:  "index.html"    
  },
  {
    imageURL:    "/images/lynx.jpeg",
    altText:     "Lynx",
    title:       "A Creative Title",
    description: "You can do anything your heart can imagine. It's a super day, so why not make a beautiful sky? You don't have to be crazy to do this but it does help.",
    linkToPage:  "index.html"
  },
  {
    imageURL:    "/images/pig_swimming.jpeg",
    altText:     "Swimming Pig",
    title:       "Other Thing",
    description: "I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. I'm a water fanatic. I love water.",
    linkToPage:  "index.html"    
  },
  {
    imageURL:    "/images/rabbit_shopping.jpeg",
    altText:     "Shopping Rabbit",
    title:       "Grocery List Container",
    description: "There are no mistakes. You can fix anything that happens. With something so strong, a little bit can go a long way.",
    linkToPage:  "index.html"    
  },
  {
    imageURL:    "/images/llama.jpg",
    altText:     "Happy Llama",
    title:       "Photo Album",
    description: "This is your world, whatever makes you happy you can put in it. Go crazy. This is gonna be a happy little seascape.",
    linkToPage:  "index.html"   
  }
];

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