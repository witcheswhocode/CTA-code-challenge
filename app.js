const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());  // enable pre-flight

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var data = require('./data/data.json'); 

// per state? parameter as state?
app.get('/getFirstPrimaryCandidatePerCounty', (req, res) => {
  var jsonArr = '';
  // return the winning primary candidates in each county
  // loop state, county
  // combine all candidates from each party, sort by candidates, get first
  // return county, 1st candidate, number of votes

  for (var state of Object.keys(data)) {
    var stateData = data[state];
    for (var county of Object.keys(stateData)) {
      var countyData = stateData[county]
      for (var party of Object.keys(countyData)) {
        var partyData = countyData[party];
        jsonArr = party;
      }
    }
  }
  res.send(jsonArr);
});


app.get('/getFirstPrimaryCandidatePerState', (req, res) => {
  // return the winning primary candidates in each state
  // loop state, county
  // combine all candidates from each party, sort by candidates, get first
  // return state, 1st candidate, party, number of votes
  res.json(data);
});

app.get('/getFirstPrimaryCandidateOverall', (req, res) => {
  // return the winning primary candidates overall
  // return 1st candidate 
  res.json(data);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})


