# trans2eval

System for machine translation and its evaluation. Provides a common interface to use the api systems of Google Translate, Yandex Translate, Bing Translator, Translatica and Moses Web Server. Translation evaluation can be done using two methods: METEOR 1.5 and BLEU.

### System requirements

* Node.js for project.
* Java for METEOR 1.5. Please download it and put into ```/path/to/project/trans2eval/METEOR``` folder (it is too big to keep it in repo).
* Perl for BLEU.

### How to start

In folder with project run following command:

```bash
npm install            # to install depenedences
npm run trans2eval     # to start translation process and then evaluation
```

### Translator requirements

In the ```src/config.js``` file should be settings for machine translation systems

#### Yandex Translate

Please use [API key request](https://tech.yandex.com/keys/get/?service=trnsl) form to obtain key. You can use it for free.

```js
  yandex: {
    key: 'your_yandex_key_here'
  }
```

#### Google Translate

Get one [here](https://developers.google.com/translate/v2/pricing). Only paid service.

```js
  google: {
    apiKey: 'your_google_api_key'
  }
```

#### Bing Translator

Create Bing Translator account [here](http://datamarket.azure.com/dataset/bing/microsofttranslator). You can use it for free.

```js
bing: {
    clientId: 'your_client_id_here',
    clientSecret: 'your_client_secret'
  }
```

### Trans2Eval options

**--name {String}**

Name for input text file.


**--from {String}**

Id for input language (eg. ```pl```).


**--to {String}**

Id for output language (eg. ```ru```).


**--translators {String[]}**

Define list of translation systems which you want to use.


**--bleu-only**

Use only BLEU evaluation method.


**--meteor-only**

Use only METEOR evaluation method.

