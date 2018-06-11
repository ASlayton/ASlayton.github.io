let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const getAllProjectData = () => {
  return new Promise((resolve, reject) => {
    const allDataArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/projectArray.json`,
    })
      .done((allDataObj) => {
        if (allDataObj !== null) {
          Object.keys(allDataObj).forEach((fbKey) => {
            allDataObj[fbKey].id = fbKey;
            allDataArray.push(allDataObj[fbKey]);
          });
        };
        resolve(allDataArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllBlogData = () => {
  return new Promise((resolve, reject) => {
    const allDataArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/blogs.json`,
    })
      .done((allDataObj) => {
        if (allDataObj !== null) {
          Object.keys(allDataObj).forEach((fbKey) => {
            allDataObj[fbKey].id = fbKey;
            allDataArray.push(allDataObj[fbKey]);
          });
        };
        resolve(allDataArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getAllBlogData,
  getAllProjectData,
};
