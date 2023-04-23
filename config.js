const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
// const ssmClient = new SSMClient({ region: "us-east-1" });

const ssmClient = new SSMClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "ASIAQXZNHOSXCN5RNGWH",
    secretAccessKey: "Ap5caW5b0TpdSaxHJkwZtSK57fBnICkZq6BXnV3J",
    sessionToken: "FwoGZXIvYXdzEPb//////////wEaDOAagMjXOkZICmf7NSLCAQn9nJo/YeTXWJTPAJak+R6KjIafDivghjTTQtyu16iq2s4RI/6KxqbwR2ftux9xaDF6HQc+Z/7xuVKxmrjtbzZ5Ro2AIsPcu1c2n/XN2VUzXuN0iOqDRWv0qXoT1bCR7dZbS0MpixEM6UEfvHPfhTtVNn2xz3BGaIW0QLlBS/ko38t4c6VawfP2G26PhnQXni0HE+2/68PGpYBlI6llZkPrnH1hQWs6iS7ttlot4HLp/yOIF1Z0aIoSSDqNnlgNbYa1KOmulqIGMi1lz2amkt3mdVDpZgyJK8e9FHWWXBD/YHsQoYNxsSBcB/mIRozY6I7hF6Oeyac="
  }
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


