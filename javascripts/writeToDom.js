const writeToDom = (myString, myElement) => {
  document.getElementById(myElement).innerHTML = myString;
};

module.exports = writeToDom;
