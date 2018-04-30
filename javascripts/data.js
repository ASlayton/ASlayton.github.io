let blogArray = [];
let projectArray = [];
let jobArray = [];

const setBlogData = (dataArray) => {
  blogArray = dataArray;
};

const setProjectData = (dataArray) => {
  projectArray = dataArray;
};

const setJobData = (dataArray) => {
  jobArray = dataArray;
};

const getBlogData = (dataArray) => {
  return blogArray;
};

const getProjectData = (dataArray) => {
  return projectArray;
};

const getJobData = (dataArray) => {
  return jobArray;
};

module.exports = {
  setBlogData,
  setProjectData,
  setJobData,
  getBlogData,
  getProjectData,
  getJobData,
};
