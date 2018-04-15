// WRITE TO DOM FUNCTION
const writeToDom = (myInnerds, placeToPutIt) => {
  const myElement = document.getElementById(placeToPutIt);
  myElement.innerHTML = myInnerds;
};

module.exports = writeToDom;
