const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');




let client;
const quiz = 'quiz'
const users = 'users'
const prequiz ='prequiz'
async function connectDb() {
  if (client) {
    console.log('Using existing client instance');
    return{ client, quiz,users,prequiz };
  } else {
    //new connection
    client = new DynamoDBClient({
      region: "us-east-1",
      credentials: {
        accessKeyId: "ASIARFTZFSZJWX2Y72Y5",
        secretAccessKey: "w9GggMq0V7kgI6fWAlfr3uAGYERskBKIOqtgp47R",
        sessionToken: "FwoGZXIvYXdzEGIaDJFUhYkqp6jpk17pvyLCASBDO4YmW6SW4owYcWeqbJiyz+LEJYyxQj3vsV+hOkkBwm3k3S5oE3zOp848VnZz6Cu2ezaDQrwgm1CEGPRh0pxq3+10IOKjo1dLzVoEA1DX2UAmhwnKB5F4kgHlseBCdtDLWQmGAKGeXzHhv4OrgFSUHeCa3peNhm6nHHxInCDu3VCRB3bDHnbN5K47r33J7Hdc5BinK/tk8jFegjoESWCalW50zWkQSKcOslG8fz2wRGroyIsuuI2U4RngVgCs7bAWKO+JzaAGMi1oCA+BoBPIprkk73uOjvuVSht7lWMYNt6xcPUb9as+W8rlSRzjFU7sEoQvB2U="
      }
    });
 
    console.log('Created new client instance',quiz);
    return { client, quiz,users,prequiz };
  }
}


module.exports = { connectDb };



