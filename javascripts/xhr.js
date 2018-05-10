const ajaxFunction = (whenFileLoads, whenFileFails, filename) => {
  $.get(`${filename}`)
    .done(whenFileLoads)
    .fail(whenFileFails);
};

module.exports = ajaxFunction;
