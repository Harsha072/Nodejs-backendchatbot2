const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");

module.exports = {
    someFunction: async function() {
        console.log("calling some function")
        const clientEmail = {
            Name: "/my-app/dialogflow/clientEmail"
          };
        
          const privatekey = {
            Name: "/my-app/dialogflow/privatekey"
          }
          const projectId = {
            Name: "/my-app/dialogflow/projectId"
          }
      
        const ssmClient = new SSMClient({
          region: "us-east-1",
          credentials: {
            accessKeyId: "ASIARFTZFSZJ4FZNHHUB",
            secretAccessKey: "RqEExNB/aK4r1vVJFqd2Rji6J1H0SljvPKXYFOhL",
            sessionToken: "FwoGZXIvYXdzEO3//////////wEaDKZOpdpHyowodSWZsSLCAUkaBPkUmAR/A9YodfphuvOFtfaToU+UHElaXRDHuU5VV+opsZP/+kxS1XlMdZkC7D9+b5ZEwrmtYOeVqjVfvY5d/22Nb+N56kKkKt7ASlY27QN14T7U0B0N91SqZZCW0y8lFaukC/hwouuGEKZHbEmiIaouks5tsMwqt1zQR8iCi9cRfiIexLUwSZSyXlqDAjv8QdheNnAT+EgpEC5LFK394WoioHzOcOJBHgJhkrRz95lxW3enBVCUigk1wm6KP2REKOjpwp8GMi0I9tr8e5gix41Px+rZzNKUwfHodhTucLDwkCZZ0Dbwy3IuJUDGX03QW5xX87s="
          },
        });
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
  }

