const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");


const ssmClient = new SSMClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "ASIARFTZFSZJSO3YEFSC",
    secretAccessKey: "vGvFnnyks/2QOp3ZQnoPXNpTT5fepm7sGQaRBKsH",
    sessionToken: "FwoGZXIvYXdzEB4aDDo5sErC09DfvO9ECCLCAUAuXoiu/3JGKU6xUjZkhjcCBNdiEaPUPn3o22jWkH0KomNIWRqXRZWrEY6ZgG4pVpDHK1XXve6kcoagcO1dryRdpJKNyJrIzCdPAjB16cm79zV6oLbOr5yyEI41NSrPsaiA5BveXCJfWo2M8Yi2J0fH9qHjCzCde9xenshP10Jn7Keh382uaax6WHEy4s0FZYRZLz45Zeby/6n4X492mrpxF3bWqn3FBCa5KzhUGofYXkjrHXSd4rIhjuYTzEO1V8rgKLqNvqAGMi18jpWANV8Zli16nvceEkIkeJvBiwXH1z0nR3SEwj32MOCBDupfq25pIK2dyjM="
  }
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


