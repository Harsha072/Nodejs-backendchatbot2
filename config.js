const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");
// const ssmClient = new SSMClient({ region: "us-east-1" });

// const ssmClient = new SSMClient({
//   region: "us-east-1",
//   credentials: {
//     accessKeyId: "ASIAQXZNHOSXMRB6UDGW",
//     secretAccessKey: "u6ZpbXOPp7pGdCLlOmn+74RThztI4Id0p99IUd1P",
//     sessionToken: "FwoGZXIvYXdzEPD//////////wEaDJQMIqCz4ba/bXrtNyLCASqosAa1TbZmO+Kd4k05fTQQ1Mg5er/nH9P1I09Aq06Cy+NR9LVlRHCTeRH406WhOgkQsfJUY4ovZjnHfq5jpjp311H7aEQvZ8Vo8XXY76HnqcLBEu2l2mTtkiHPfAeNWDjtMSgLTcsyF7qzZVrlbeaOFkTO8vgLM2DF/OdI93kD+uZcER3Rc2cn9MpKDDweHL0WWmqNiFA9295o68uyqb3fSJakw1Zb4s8tJWtZJQ+q1f50u2l2ndxpD48orQ9Srw2AKIqMlaIGMi3/zlxJ7fLQwgEzq97e94SuzhNOmCUBq0STVp9POvqWI7iCixRCSkhYttCuzMY="
//   }
// });

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


