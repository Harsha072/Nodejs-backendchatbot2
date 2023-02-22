const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
const { MongoClient, ServerApiVersion } = require('mongodb');

// const ssmClient = new SSMClient({
//   region: "us-east-1",
//   credentials: {
//     accessKeyId: "ASIARFTZFSZJY23D4JVJ",
//     secretAccessKey: "Z4N+i/YKKJNWXgbfDD5abK6g75mRWhMB9GGPAEuQ",
//     sessionToken: "FwoGZXIvYXdzEFAaDMKaLArTqvbzaL1o0CLCAdTd0kUo1ZXv/W0xsMAP6e3vqiOAVnzBctSLXqqnGv/f8B3U30sr15OvY466OeyBCQ5RLmxH6lSL8F+2/ENiLjTwE0ao6yTeMUGOl3MhCeKlaod0DB2FjUpJdkGw+Fa86+8VaQLEsha2o7m5dN+G8UOLRlWED+7/Uep2CRew64NATcbmqyqNZTVWrh+OaPvCG+lU0zhnA2ID1xOHfhTX8VsjMFgGJAoGI2n70S+uoZea6/L/NI17bkaUdB82FXk9BR4WKK3H2J8GMi0P69nD1TZKb9GkAd2yLlOeAEM9+QIonjDSnlOwh+dBtUsyKxjPPsgVK/T5gNc="
//   },
// });


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
            const ssmClient = new SSMClient({ region: "us-east-1" });
        
          
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

