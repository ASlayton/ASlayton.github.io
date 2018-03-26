//WRITE TO DOM FUNCTION
const writeToDom = (myInnerds, placeToPutIt) => {
  let myElement = document.getElementById(placeToPutIt);
  myElement.innerHTML = myInnerds;
};

//INSERT HEADER FUNCTION
const myHeader = () => {
  const headerText = "<h1 class='header-title'>Amanda Slayton</h1>";
  writeToDom(headerText, "page-header");
};
myHeader();

//INSERT NAVBAR FUNCTION

const navbarElements = [
  {
    title: "Home",
    link:  "/index.html"
  },
  {
    title: "Blogs",
    link:  "/html/blogs.html"
  },
  {
    title: "Professional History",
    link:  "/html/resume.html"
  },
  {
    title: "Contacts",
    link:  "/html/contact.html"
  },
  {
    title: "Projects",
    link:  "/html/projects.html"
  },
  {
    title: "Fun Fact",
    link:  "/html/funFact.html"
  }
];

const myNavbar = (myArray) => {
  let navbarInnerds = `<nav><ul class='navbar' id='nav-ul'>`;
    myArray.forEach((element) => {
      navbarInnerds += `<li class='navbar-item'><a href='${element.link}'>${element.title}</a></li>`;
    });
  navbarInnerds += `</ul></nav>`
  writeToDom(navbarInnerds, "navbar-container")
};

myNavbar(navbarElements);

//INSERT FOOTER FUNCTION

  const myFooter = () => {
    const footerText = "<p>&copy;Amanda Slayton - OnlySomewhat 2018</p>";
    writeToDom(footerText, "page-footer")
  };

myFooter();


//DETERMINE CURRENT PAGE

const pickAPage = () => {
  let myCurrentPageTitle = document.title;
  let page = myCurrentPageTitle.split(" ").pop();

  if(page === "Home"){
    let currentNavLocation = document.getElementById("nav-ul").children[0].children[0];
    currentNavLocation.classList.add("current-location");
  }else if (page === "Blog"){
    let currentNavLocation = document.getElementById("nav-ul").children[1].children[0];
    currentNavLocation.classList.add("current-location");
  }else if (page === "Resume"){
    let currentNavLocation = document.getElementById("nav-ul").children[2].children[0];
    currentNavLocation.classList.add("current-location");
  }else if (page === "Contact") {
    let currentNavLocation = document.getElementById("nav-ul").children[3].children[0];
    currentNavLocation.classList.add("current-location");
  }else if (page === "Fact") {
    let currentNavLocation = document.getElementById("nav-ul").children[4].children[0];
    currentNavLocation.classList.add("current-location");
  }else if (page === "Projects"){
    let currentNavLocation = document.getElementById("nav-ul").children[5].children[0];
    currentNavLocation.classList.add("current-location");
  };
};

pickAPage();