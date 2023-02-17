// ./{root_folder}/routes/api/index.js
var router = require('express').Router();
const axios = require('axios');
// const { Credential } = require("@aws-sdk/types");
const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // ES Modules import
var runIntent = require("../controller/dialogFlow").runIntent;



// const accessKeyId = "ASIARFTZFSZJVZIC5SFD";
// const secretAccessKey = "bru19wARZVTuHS4GLficEE9KbgPVDkbK54puD7Oo";

// const credentials = new Credential(accessKeyId, secretAccessKey);

// const ssmClient = new SSMClient({
//   region: "us-east-1",
//   credentials: {
//     accessKeyId:"ASIARFTZFSZJVZIC5SFD",
//     secretAccessKey:"bru19wARZVTuHS4GLficEE9KbgPVDkbK54puD7Oo",
//     sessionToken:"FwoGZXIvYXdzENz//////////wEaDAoOmghHfCWWW3cWrSLCAb7kuLnRufTqqXxsWRwrCYIeaTON/xqmyJbo1SpEsRsfm897tKxaBDN/Mm+OLuN8s1bRpbRGIbLQop/hl0NqGGJjrNncx2v8/SFHaRb3mCysyMw6BJD6VxuKNFOKHuYxP9YgpsGq9HaWeGodqaO8tHd2cStXOgpxFqGTT3J2JCsDNZtrp8CwTPSB4JQ+pQ3yd76IupXKhDbKfQQJXxVM32iAMs/+SOwFzSSDi8K9sVMtHO24pqqq3j2EGcBJ/OSqhkUYKO2Vv58GMi38sztcnspMm7FPZkVfZzkWgsqOKlHs5pjts98H9AvKlEFMfx9rycTwdRZO/Rg="
//   },
// });

const ssmClient = new SSMClient({ region: "us-east-1" });
try{
  const clientEmail = {
    Name: "/my-app/dialogflow/clientEmail",
  };
 
  
  console.log("inside try::::")
  router.post("/requestText", function(req, res){

   
    (async() => {
      const command = new GetParameterCommand(clientEmail);
      const data = await ssmClient.send(command);
  console.log("got data:::::  ",data.Parameter.Value);
        console.log("request body :: ",req.body)
        var result = await runIntent(process.env.DIALOGFLOW_PROJECT_ID, req.body.requestText,req.body.name);
         console.log("the result",result)
       
        return res.send(
            {
                "id":result.id,
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
catch(error){

}


module.exports = router;