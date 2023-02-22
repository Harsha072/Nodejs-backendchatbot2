
var router = require('express').Router();
const axios = require('axios');
const { someFunction } = require('../config');
const {connectDb} = require('../db');

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
      const quizClient =await connectDb()
      console.log("client:::: ",quizClient);
   
      const quiz = response.data
      console.log(quiz)
      res.send(quiz[0]);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to retrieve data from API' });
    }
  });

  router.get('/quiz-question/:id', async (req, res) => {
    try {
      const id = req.params.id;
      console.log("number ",id)
      const collection=await connectDb();
      try {
        const quiz = await collection.findOne({}); // fetches the entire quiz document from the database
        console.log(typeof quiz.questions.length);
        if(id<=quiz.questions.length){
          const question = quiz.questions.find(q => q.id == id); // finds the question with the specified id
          console.log("found question ",question)
          res.status(200).json(question);
        }
        else{
          res.send({message:'end'})
        }
      
      } catch (err) {
        console.error(err);
        res.json({ message: 'Server error' });
      }
    
     
     
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to retrieve data from API' });
    }
  });

  router.get('/quiz-question', async (req, res) => {
    try {
      const id = req.params.id;
      console.log("number ",id)
      const collection=await connectDb();
      try {
        const quiz = await collection.findOne({}); // fetches the entire quiz document from the database
        console.log(typeof quiz.questions.length);
       
          res.send({length:quiz.questions.length})
        
      
      } catch (err) {
        console.error(err);
        res.json({ message: 'Server error' });
      }
    
     
     
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Failed to retrieve data from API' });
    }
  });


}
catch (error) {
   console.log("entire ",error)
}


module.exports = router;