const xhr = (whenFileLoads, whenFileFails, filename) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', whenFileLoads);
  myRequest.addEventListener('error', whenFileFails);
  myRequest.open('GET', filename);
  myRequest.send();
};

module.exports = xhr;
