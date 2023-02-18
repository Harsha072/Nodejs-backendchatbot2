
var router = require('express').Router();
const axios = require('axios');
const { someFunction } = require('../config');


var runIntent = require("../controller/dialogFlow").runIntent;




// const ssmClient = new SSMClient({ region: "us-east-1" });

try {


  console.log("inside try::::")

  router.post("/requestText", function (req, res) {
    (async () => {
      const [Dkey, Demail, id] = await someFunction();
      console.log("request body :: ", req.body)
     var result = await runIntent(id, req.body.requestText, req.body.name);
      console.log("the result", result)

      return res.send(
        {
          "id": result.id,
          "responseMessage": result.Response,
          "originalQuery": result.Query,
          "intent": result.Intent
        });

    })()



  }


  );

  router.get('/quiz', async (req, res) => {
    try {
      const response = await axios.get('https://the-trivia-api.com/api/questions?categories=history,science,geography,sport_and_leisure&limit=5&region=IN&difficulty=hard');
      console.log(response)
      const quiz = response.data
      console.log(quiz)
      res.send(quiz[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to retrieve data from API' });
    }
  });

}
catch (error) {

}


module.exports = router;