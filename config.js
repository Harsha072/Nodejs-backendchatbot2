const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
const { MongoClient, ServerApiVersion } = require('mongodb');

// const ssmClient = new SSMClient({
//   region: "us-east-1",
//   credentials: {
//     accessKeyId: "ASIARFTZFSZJVMDKYQMC",
//     secretAccessKey: "nnpcOyLXzK2flPtcvvYhKuFXlDOCHsgp8AIZfRa3",
//     sessionToken: "FwoGZXIvYXdzEB0aDP7GyC9U0LSEMRnyKyLCAexCn2J5D1LRhALviWzag7ZnwQE1Sgd8WpL7l+inO8h1NqxhO7tWOECa0h+0jLnIIKTSqCs4uciHfNyYQ8oSVL4ASqOETueYDRVQmZ7M5zBQPFESolWu4AAVEBoUHrxmWHW4+keFRrMJG0dzLkZHkHUqvRLTs7QISv2PrSfpeO7Rk/t4r09EbV5DqzStAwsoGYOd+wfT//BLii3j+tJm6cfpQDzonIucIMIZSbPE+/Ov9l1vaErE6sZsVitj2ToNLj3hKNKpzZ8GMi0VN0OAHAdrUi+PQEYSBRgA8kTiEgpWSh0h14P8UVrwduMqR9dK7aBNZNIGoBA="
//   },
// });
module.exports = {
  
    someFunction: async function() {
        console.log("calling some function")
        const clientEmail = {
            Name: "/my-app/dialogflow/clientEmail"
          };
        
          const privatekey = {
            Name: "/my-app/dialogflow/privatekey",
            WithDecryption: true
          }
          const projectId = {
            Name: "/my-app/dialogflow/projectId"
          }
          // const ssmClient = new SSMClient({ region: "us-east-1" });
      
        
        const command1 = new GetParameterCommand(clientEmail);
        const email = await ssmClient.send(command1);
       var Demail=email.Parameter.Value
      
        const command2 = new GetParameterCommand(projectId);
        const projectid = await ssmClient.send(command2);
       var id=projectid.Parameter.Value
        
      
        const command3 = new GetParameterCommand(privatekey);
       const  key = await ssmClient.send(command3);
      var  Dkey= key.Parameter.Value;
    
    
      return [Dkey,Demail,id];
    },
    connectDb: async function() {
      const dbUsername = {
        Name: "/my-app/dialogflow/clientEmail"
      };
      const dbPassword = {
        Name: "/my-app/dialogflow/clientEmail"
      };
      const command1 = new GetParameterCommand(dbUsername);
        const user_name = await ssmClient.send(command1);
       var username=user_name.Parameter.Value

       const command2 = new GetParameterCommand(dbPassword);
       const pwd = await ssmClient.send(command1);
      var password=pwd.Parameter.Value
    
      const uri = `mongodb+srv://${username}:${password}@quizcluster.qbwazlw.mongodb.net/?retryWrites=true&w=majority`;
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
      client.connect(err => {
        const collection = client.db("Quiz-chatbot").collection("Quiz Collection");
        console.log("db connection succesfull")
        client.close();
      });

    }
  }

