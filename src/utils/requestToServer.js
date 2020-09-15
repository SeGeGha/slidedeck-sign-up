import validator from './validator';

const requestToServer = (data, url) => {
  const dataObj = JSON.parse(data);
  const errors = validator(dataObj);

  return new Promise((resolve) => {
    const content = (errors.length > 0) ? errors : dataObj;
    const response = {
      content,
      json() {
        return this.content;
      },
    };
    return setTimeout(() => resolve(response), 1000);
  });
};

export default requestToServer;
