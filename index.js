// var Fruit = require('./models/Fruit');
var Word = require('./models/Word');
const https = require('https')

let url = 'https://spreadsheets.google.com/feeds/list/1o9w4hMb1L05AyZjHSrQPZpdDQEQpY75Iaeoy9pQBzd4/od6/public/values?alt=json'
function loadWordsFromOnlineSpreadsheet(url){
    let words = []

    https.get(url, (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          spreadsheet = (JSON.parse(data))
      
          for (let i = 0; i < spreadsheet.feed.entry.length; i++){
              word = spreadsheet.feed.entry[i].title.$t
              correctDef = spreadsheet.feed.entry[i].gsx$correctdefinition.$t
              incorrectDef = spreadsheet.feed.entry[i].gsx$incorrectdefinition.$t
              words.push(new Word(word, correctDef, incorrectDef))
          }
          console.log(words)
        })
      
      }).on("error", (err) => {
        console.log("Error: " + err.message)
      });
      //return the words!!! callback, sg
}

console.log(loadWordsFromOnlineSpreadsheet(url))

//need words to be a global variable that updates whenever the external data is loaded

//try to make this with callbacks:
//function loadWordsfrom...(url, callback)
//loadWords..(url, (words) => {
//     console.log(words)
// })

//TODO call function to load words array when game is init 
//lodaSpreadsheet(url) => ('word') => (def: '', 'incorrectDef:'')
//use that array when fuits are spawned