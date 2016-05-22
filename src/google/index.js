const config = require('../config').google;
const googleTranslate = require('google-translate')(config.apiKey);

const makeTranslation = (text, from, to) => {
  from = from || 'pl';
  to = to || 'ru';

  return new Promise((resolve, reject) => {
    googleTranslate.translate(text, from, to, function (error, res) {
      if (res && res.code === 200) {
        resolve(res.translatedText);
      }
      reject(error);
    });
  });
};

makeTranslation('Tłumaczenie działa.')
  .then(translation => {
    console.log(`google: ${translation}`);
    return translation;
  })
  .catch(error => {
    throw new Error(`Error: ${error}`);
  });
