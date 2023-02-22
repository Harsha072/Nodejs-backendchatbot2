const MongoClient = require('mongodb').MongoClient;
const { GetParameterCommand, SSMClient } = require('@aws-sdk/client-ssm');
const { ServerApiVersion } = require('mongodb');

const ssmClient = new SSMClient({ region: "us-east-1" });


// const ssmClient = new SSMClient({
//   region: "us-east-1",
//   credentials: {
//     accessKeyId: "ASIARFTZFSZJY23D4JVJ",
//     secretAccessKey: "Z4N+i/YKKJNWXgbfDD5abK6g75mRWhMB9GGPAEuQ",
//     sessionToken: "FwoGZXIvYXdzEFAaDMKaLArTqvbzaL1o0CLCAdTd0kUo1ZXv/W0xsMAP6e3vqiOAVnzBctSLXqqnGv/f8B3U30sr15OvY466OeyBCQ5RLmxH6lSL8F+2/ENiLjTwE0ao6yTeMUGOl3MhCeKlaod0DB2FjUpJdkGw+Fa86+8VaQLEsha2o7m5dN+G8UOLRlWED+7/Uep2CRew64NATcbmqyqNZTVWrh+OaPvCG+lU0zhnA2ID1xOHfhTX8VsjMFgGJAoGI2n70S+uoZea6/L/NI17bkaUdB82FXk9BR4WKK3H2J8GMi0P69nD1TZKb9GkAd2yLlOeAEM9+QIonjDSnlOwh+dBtUsyKxjPPsgVK/T5gNc="
//   },
// });

let client;
let collection;
async function connectDb() {
  if (client && (client.topology.isConnected() || client.isConnected())) {
    console.log('Using existing client instance');
    return collection;
  }

  else{
    const dbUsername = {
        Name: "/my-app/dbUsername"
      };
      const dbPassword = {
        Name: "/my-app/dbPassword"
      };
    
      const command1 = new GetParameterCommand(dbUsername);
      const user_name = await ssmClient.send(command1);
      const username = user_name.Parameter.Value;
    
      const command2 = new GetParameterCommand(dbPassword);
      const pwd = await ssmClient.send(command2);
      const password = pwd.Parameter.Value;
    
      const uri = `mongodb+srv://${username}:${password}@quizcluster.qbwazlw.mongodb.net/?retryWrites=true&w=majority`;
      client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    
      await client.connect();
      collection = client.db("Quiz-chatbot").collection("Quiz Collection")
      console.log("db connection successful");
      
  return collection;
  }
  

}

module.exports = { connectDb };