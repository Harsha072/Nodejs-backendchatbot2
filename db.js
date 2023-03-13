const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');




let client;
const quiz = 'quiz'
const users = 'users'
const prequiz ='prequiz'
async function connectDb() {
  if (client) {
    console.log('Using existing client instance');
    return{ client, quiz,users,prequiz };
  } else {
    //new connection
    client = new DynamoDBClient({
      region: "us-east-1",
      credentials: {
        accessKeyId: "ASIARFTZFSZJSO3YEFSC",
        secretAccessKey: "vGvFnnyks/2QOp3ZQnoPXNpTT5fepm7sGQaRBKsH",
        sessionToken: "FwoGZXIvYXdzEB4aDDo5sErC09DfvO9ECCLCAUAuXoiu/3JGKU6xUjZkhjcCBNdiEaPUPn3o22jWkH0KomNIWRqXRZWrEY6ZgG4pVpDHK1XXve6kcoagcO1dryRdpJKNyJrIzCdPAjB16cm79zV6oLbOr5yyEI41NSrPsaiA5BveXCJfWo2M8Yi2J0fH9qHjCzCde9xenshP10Jn7Keh382uaax6WHEy4s0FZYRZLz45Zeby/6n4X492mrpxF3bWqn3FBCa5KzhUGofYXkjrHXSd4rIhjuYTzEO1V8rgKLqNvqAGMi18jpWANV8Zli16nvceEkIkeJvBiwXH1z0nR3SEwj32MOCBDupfq25pIK2dyjM="
      }
    });
 
    console.log('Created new client instance',quiz);
    return { client, quiz,users,prequiz };
  }
}


module.exports = { connectDb };



