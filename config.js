const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
const { MongoClient, ServerApiVersion } = require('mongodb');

const ssmClient = new SSMClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "ASIARFTZFSZJQWSEUG4L",
    secretAccessKey: "nqj/E29zxrhzrx8Bs+xmPtBmmwS5IYOBXYzR/XLU",
    sessionToken: "FwoGZXIvYXdzEEsaDNTiaplC9GfTuMih5yLCAb7cURsoHzy+mBapqN4NAfZrGteXqYfK7CfZOrrGEHBHt6/5XOrLBUPkPv35XAeXsqsBYG3g7lfrFzvmn1xuA9RzjXk8ly9dsuMsj+/iO1SVyRJONmc1TbQCQ1UA0hAUW0lYlWSATkMGGNL1Xv+LCJS50vdJORJjr8wL70vm70t3LgR0VIsMtS61rn/oj8NizTdBgnCN1iknw6fUbiAwebUCJVnp55QcJHViueC9lVnIF/aBQjEoQyTWCWyhP5gqMbAtKKvP158GMi0GQlNoBpms/bu/eyFrSiTu/3TMO6Hm64QvK9Y9e9QOM1gz5mD1G0xZ4Go9CIE="
  },
});


async function someFunction(){
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
}

module.exports={someFunction}
// module.exports = {
  
//     someFunction: async function() {
//         console.log("calling some function")
//         const clientEmail = {
//             Name: "/my-app/dialogflow/clientEmail"
//           };
        
//           const privatekey = {
//             Name: "/my-app/dialogflow/privatekey",
//             WithDecryption: true
//           }
//           const projectId = {
//             Name: "/my-app/dialogflow/projectId"
//           }
//           // const ssmClient = new SSMClient({ region: "us-east-1" });
      
        
//         const command1 = new GetParameterCommand(clientEmail);
//         const email = await ssmClient.send(command1);
//        var Demail=email.Parameter.Value
      
//         const command2 = new GetParameterCommand(projectId);
//         const projectid = await ssmClient.send(command2);
//        var id=projectid.Parameter.Value
        
      
//         const command3 = new GetParameterCommand(privatekey);
//        const  key = await ssmClient.send(command3);
//       var  Dkey= key.Parameter.Value;
    
    
//       return [Dkey,Demail,id];
//     },
//     connectDb: async function() {
//       const dbUsername = {
//         Name: "/my-app/dialogflow/clientEmail"
//       };
//       const dbPassword = {
//         Name: "/my-app/dialogflow/clientEmail"
//       };
//       const command1 = new GetParameterCommand(dbUsername);
//         const user_name = await ssmClient.send(command1);
//        var username=user_name.Parameter.Value

//        const command2 = new GetParameterCommand(dbPassword);
//        const pwd = await ssmClient.send(command1);
//       var password=pwd.Parameter.Value
    
//       const uri = `mongodb+srv://${username}:${password}@quizcluster.qbwazlw.mongodb.net/?retryWrites=true&w=majority`;
//       const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//       client.connect(err => {
//         const collection = client.db("Quiz-chatbot").collection("Quiz Collection");
//         console.log("db connection succesfull")
//         client.close();
//       });

    
//     }
  
//   }

