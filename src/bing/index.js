/**
 * Warning! Bing needs to encode clientId, clinetSecret and text.
 */

const config = require('../config').bing;
const translate = require('bing-translate').init({
  'client_id': encodeURI(config.clientId),
  'client_secret': encodeURI(config.clientSecret)
});

const makeTranslation = (text, from, to) => {
  from = from || 'pl';
  to = to || 'ru';

  return new Promise((resolve, reject) => {
    translate.translate(encodeURI(text), from, to, function (error, res) {
      if (res.code === 200) {
        resolve(res.translated_text);
      }
      reject(error);
    });
  });
};

makeTranslation('Tłumaczenie działa.')
  .then(translation => {
    console.log(`bing: ${translation}`);
    return translation;
  })
  .catch(error => {
    throw new Error(`Error: ${error}`);
  });
