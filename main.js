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
    link:  "/funFact.html"
  }
];

const myNavbar = (myArray) => {
  let navbarInnerds = `<nav><ul class='navbar'>`;
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
