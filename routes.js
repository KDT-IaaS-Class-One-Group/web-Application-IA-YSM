const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/submit', (req, res) => {
  let logMessage = req.body.message;
  console.log(logMessage)

  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      console.error('An error has occured while loading files')
      return;
    }

    let dataJson = JSON.parse(data);
    let timestamp = new Date().toLocaleTimeString();

    dataJson.mainContent.inputRecords.push({
      type: 'user',
      message: logMessage,
      timestamp: timestamp
    });

    fs.writeFile('./data/data.json', JSON.stringify(dataJson, null, 2), (err) => {
      if (err) {
        console.error('An error has occured while saving files.')
        return res.status(500).send('Server error')
      } else {
        console.log('data has successfully saved.')
      }
    })
  })
})

module.exports = {
  dataJsonS : router.post('/submit')
};