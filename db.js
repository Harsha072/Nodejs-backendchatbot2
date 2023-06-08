const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');



let client;
const quiz = 'quiz'
const users = 'users2'
const prequiz ='prequiz2'
const postquiz='postquiz2'
async function connectDb() {
  if (client) {
    console.log('Using existing harsha client instance harsha');
    return{ client, quiz,users,prequiz,postquiz };
  } else {
    console.log("new harsha connection to new db")
    client = new DynamoDBClient({
      region: "us-east-1"
      });

 


    return { client, quiz,users,prequiz,postquiz };
  }
}


module.exports = { connectDb };

