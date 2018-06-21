const writeToDom = (myString, myElement) => {
  $(myElement).html(myString);
};

module.exports = {
  writeToDom,
};
