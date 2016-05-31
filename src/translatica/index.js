const config = require('../config').translatica;
const request = require('request');

const getURL = (text, from, to) => {
  return `${config.url}?direction=${from}${to}&source=${encodeURI(text).replace(/%20/g, '+')}`;
};

const makeTranslation = (text, from, to) => {
  from = from || 'pl';
  to = to || 'ru';

  return new Promise((resolve, reject) => {
    request({
      url: getURL(text, from, to),
      'content-type': 'application/json; charset=utf-8'
    }, (error, response, body) => {
      if (!error) {
        resolve(JSON.parse(body));
      }
      reject(error);
    });
  });
};


makeTranslation('Tłumaczenie działa')
  .then(translation => {
    console.log(`Translatica: ${translation}`);
    return translation;
  })
  .catch(error => {
    throw new Error(`Error: ${error}`);
  });
