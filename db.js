const MongoClient = require('mongodb').MongoClient;
const { GetParameterCommand, SSMClient } = require('@aws-sdk/client-ssm');
const { ServerApiVersion } = require('mongodb');

// const ssmClient = new SSMClient({ region: "us-east-1" });


const ssmClient = new SSMClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "ASIARFTZFSZJQWSEUG4L",
    secretAccessKey: "nqj/E29zxrhzrx8Bs+xmPtBmmwS5IYOBXYzR/XLU",
    sessionToken: "FwoGZXIvYXdzEEsaDNTiaplC9GfTuMih5yLCAb7cURsoHzy+mBapqN4NAfZrGteXqYfK7CfZOrrGEHBHt6/5XOrLBUPkPv35XAeXsqsBYG3g7lfrFzvmn1xuA9RzjXk8ly9dsuMsj+/iO1SVyRJONmc1TbQCQ1UA0hAUW0lYlWSATkMGGNL1Xv+LCJS50vdJORJjr8wL70vm70t3LgR0VIsMtS61rn/oj8NizTdBgnCN1iknw6fUbiAwebUCJVnp55QcJHViueC9lVnIF/aBQjEoQyTWCWyhP5gqMbAtKKvP158GMi0GQlNoBpms/bu/eyFrSiTu/3TMO6Hm64QvK9Y9e9QOM1gz5mD1G0xZ4Go9CIE="
  },
});
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