const config = require('../config').yandex;
const translate = require('yandex-translate')(config.key);

const makeTranslation = (text, from, to) => {
  from = from || 'pl';
  to = to || 'ru';

  return new Promise((resolve, reject) => {
    translate.translate(text, {from, to}, function (error, res) {
      if (res.code === 200) {
        resolve(res.text);
      }
      reject(error);
    });
  });
};

makeTranslation('Tłumaczenie działa.')
  .then(translation => {
    console.log(`yandex: ${translation}`);
    return translation;
  })
  .catch(error => {
    throw new Error(`Error: ${error}`);
  });
