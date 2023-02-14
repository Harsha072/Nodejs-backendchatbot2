// ./{root_folder}/routes/api/index.js
var router = require('express').Router();
const axios = require('axios');
var runIntent = require("../controller/dialogFlow").runIntent;

try{
  console.log("inside try::::")
  router.post("/requestText", function(req, res){
    // var intentRequest = createSessionPath(req.params.projectId);
    (async() => {
        console.log("request body :: ",req.body)
        var result = await runIntent(process.env.DIALOGFLOW_PROJECT_ID, req.body.requestText,req.body.name);
         console.log("the result",result)
        return res.send(
          {
              "response":"activejgjhgkdfhgdfhgfdn"
          });
      
  })()
        // var result = await runIntent('test2-tsgl', 'hi')
       
    //     return res.send(
    //         {
    //             "id":result.id,
    //             "responseMessage": result.Response,
    //             "originalQuery": result.Query,
    //             "intent": result.Intent
    //         });
        
    // })()

});
//'https://opentdb.com/api.php?amount=10'
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
catch(error){

}


module.exports = router;