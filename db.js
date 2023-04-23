const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');




let client;
const quiz = 'quiz'
const users = 'users'
const prequiz ='prequiz'
const postquiz='postquiz'
async function connectDb() {
  if (client) {
    console.log('Using existing client instance');
    return{ client, quiz,users,prequiz,postquiz };
  } else {
    //new connection
    client = new DynamoDBClient({
      region: "us-east-1",
      credentials: {
        accessKeyId: "ASIAQXZNHOSXMRB6UDGW",
        secretAccessKey: "u6ZpbXOPp7pGdCLlOmn+74RThztI4Id0p99IUd1P",
        sessionToken: "FwoGZXIvYXdzEPD//////////wEaDJQMIqCz4ba/bXrtNyLCASqosAa1TbZmO+Kd4k05fTQQ1Mg5er/nH9P1I09Aq06Cy+NR9LVlRHCTeRH406WhOgkQsfJUY4ovZjnHfq5jpjp311H7aEQvZ8Vo8XXY76HnqcLBEu2l2mTtkiHPfAeNWDjtMSgLTcsyF7qzZVrlbeaOFkTO8vgLM2DF/OdI93kD+uZcER3Rc2cn9MpKDDweHL0WWmqNiFA9295o68uyqb3fSJakw1Zb4s8tJWtZJQ+q1f50u2l2ndxpD48orQ9Srw2AKIqMlaIGMi3/zlxJ7fLQwgEzq97e94SuzhNOmCUBq0STVp9POvqWI7iCixRCSkhYttCuzMY="
      }
    });
 
    console.log('Created new client instance',quiz);
    return { client, quiz,users,prequiz,postquiz };
  }
}


module.exports = { connectDb };



{/* <iframe src="https://giphy.com/embed/cFymzwrFON2lOJEAMS" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/basketballmadness-kentucky-wildcats-mbb-wbb-cFymzwrFON2lOJEAMS">via GIPHY</a></p> */}