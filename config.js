const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm");


const ssmClient = new SSMClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: "ASIARFTZFSZJWX2Y72Y5",
    secretAccessKey: "w9GggMq0V7kgI6fWAlfr3uAGYERskBKIOqtgp47R",
    sessionToken: "FwoGZXIvYXdzEGIaDJFUhYkqp6jpk17pvyLCASBDO4YmW6SW4owYcWeqbJiyz+LEJYyxQj3vsV+hOkkBwm3k3S5oE3zOp848VnZz6Cu2ezaDQrwgm1CEGPRh0pxq3+10IOKjo1dLzVoEA1DX2UAmhwnKB5F4kgHlseBCdtDLWQmGAKGeXzHhv4OrgFSUHeCa3peNhm6nHHxInCDu3VCRB3bDHnbN5K47r33J7Hdc5BinK/tk8jFegjoESWCalW50zWkQSKcOslG8fz2wRGroyIsuuI2U4RngVgCs7bAWKO+JzaAGMi1oCA+BoBPIprkk73uOjvuVSht7lWMYNt6xcPUb9as+W8rlSRzjFU7sEoQvB2U="
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


