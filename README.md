# textbase.js 🧬

## textbase.js is [Textbases'](https://textbase.us/) API npm package for your project.

### Installation
With **npm**: ```npm i textbase.js``` or with **yarn**: ```yarn add textbase.js```

## Sending SMS
```js
const textbase = require('textbase.js')
// import textbase from 'textbase.js'

textbase.sms('YOUR_API_KEY', {to: 'TO_NUMBER', message: 'MESSAGE'})
  .then((data) => {
    /* The package returns a typical AxiosRequest response, so you have to get the data from the response */
    console.log(data.data)
  }).catch((error) => {
    /* Errors thrown will be caught in here */
    void console.log(error)
  }) 
```