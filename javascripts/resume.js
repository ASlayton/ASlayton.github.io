const data = require('./data');

const buildResume = () => {
  const resumeArray = data.getJobData();
  let domString = '';
  resumeArray.forEach((job) => {
    domString += `<div class="job-container">`;
    domString +=   `<h3 class="col-md-6">${job.name}</h3>`;
    domString += `<p class="col-md-6">${job.startDate} - ${job.endDate}</p>`;
    domString += `<p>${job.title}</p>`;
    domString += `<p>Responsibility:</p>`;
    domString += `<ul>`;
    job.responsibility.forEach((task) => {
      domString += `<li>${task}</li>`;
    });
    domString += `</div>`;
  });
  return domString;
};

module.exports = {
  buildResume,
};
