const config = require('../config').yandex;
const yandexTranslate = require('yandex-translate')(config.key);

const makeTranslation = (text, from, to) => {
  from = from || 'pl';
  to = to || 'ru';

  return new Promise((resolve, reject) => {
    yandexTranslate.translate(text, {from, to}, function (error, res) {
      if (res && res.code === 200) {
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
