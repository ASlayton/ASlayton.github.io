let blogArray = [];
let projectArray = [];
let jobArray = [];

const setBlogData = (dataArray) => {
  blogArray = dataArray.blogs;
};

const setProjectData = (dataArray) => {
  projectArray = dataArray.projectArray;
};

const setJobData = (dataArray) => {
  jobArray = dataArray.jobs;
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
