// var Fruit = require('./models/Fruit');
// var Word = require('./models/Word');


const https = require('https')
https.get('https://spreadsheets.google.com/feeds/list/1o9w4hMb1L05AyZjHSrQPZpdDQEQpY75Iaeoy9pQBzd4/od6/public/values?alt=json', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    spreadsheet = (JSON.parse(data))
    //number is the number of word
    console.log(spreadsheet.feed.entry[2].title.$t)
    console.log(spreadsheet.feed.entry[2].gsx$correctdefinition.$t)
    console.log(spreadsheet.feed.entry[2].gsx$incorrectdefinition.$t)

  });

}).on("error", (err) => {
  console.log("Error: " + err.message)
});

//TODO call function to load words array when game is init 
//lodaSpreadsheet(url) => ('word') => (def: '', 'incorrectDef:'')
//use that array when fuits are spawned