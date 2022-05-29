# CTA Code Test - Election API

# How to run on your system
1. npm install
1. nodemon app.js

# Testing the endpoints
1. Return the winning primary candidates in each county: 
- http://localhost:3000/getFirstPrimaryCandidatePerCounty
- dummy result: {"Chester":{"Nixon":200},"Sacramento":{"Redwood":2000},"Broward":{"Dolphin":1000},"Orange":{"Haze":5002}}
2. Return the winning primary cnadidates in each state: 
- http://localhost:3000/getFirstPrimaryCandidatePerState
- dummy result: {"Pennsylvania":{"Nixon":200},"California":{"Redwood":2000},"Florida":{"Haze":5002}}
3. Return the winning primary candidates overall
- http://localhost:3000/getFirstPrimaryCandidateOverall
- dummy result: {"Haze":5002}

