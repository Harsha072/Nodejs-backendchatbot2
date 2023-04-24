const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
// const ssmClient = new SSMClient({ region: "us-east-1" });

const ssmClient = new SSMClient({
  region: "us-east-1"
});
// let ssmClient;
async function someFunction(){
  console.log("calling some function")
          const clientEmail = {
              Name: "/my-app/dialogflow/clientEmail"
            };
          
            const privatekey = {
              Name: "/my-app/dialogflow/privateKey",
              WithDecryption: true
            }
            const projectId = {
              Name: "/my-app/dialogflow/projectId"
            }
            //  ssmClient = new SSMClient({ region: "us-east-1" });
        console.log("brfor ssm")
            const ssmClient = new SSMClient({
              region: "us-east-1"
            });
            console.log("aftr ssm")
          const command1 = new GetParameterCommand(clientEmail);
          const email = await ssmClient.send(command1);
         var Demail=email.Parameter.Value
        
          const command2 = new GetParameterCommand(projectId);
          const projectid = await ssmClient.send(command2);
         var id=projectid.Parameter.Value
          
        
          const command3 = new GetParameterCommand(privatekey);
         const  key = await ssmClient.send(command3);
        var  Dkey= key.Parameter.Value;
        console.log("got command",Demail,Dkey,id)
      
        return [Dkey,Demail,id];
}

module.exports={someFunction}


