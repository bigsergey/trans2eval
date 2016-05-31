const config = require('../config').moses;
const exec = require('exec-queue');
const getCommand = (text) => `echo "${text}" | nc ${config.host} ${config.port}`;

const makeTranslation = (text) => {
  return new Promise((resolve, reject) => {
    exec(getCommand(text), (error, stdout, sdterr) => {
      if (!error) {
        resolve(stdout.slice(0, translation.length - 1));
      }
      reject(`${error} - ${sdterr}`);
    });
  });
};

makeTranslation('Tłumaczenie działa.')
  .then(translation => {
    console.log(`moses: ${translation}`);
    return translation;
  })
  .catch(error => {
    throw new Error(`Error: ${error}`);
  });
