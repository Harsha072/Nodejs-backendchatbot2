

const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql2')

const app = express()

app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

// https://gist.githubusercontent.com/meech-ward/1723b2df87eae8bb6382828fba649d64/raw/ee52637cc953df669d95bb4ab68ac2ad1a96cd9f/lotr.sql

app.get("/test", (req, res) => {
  res.send("<h1>It's working 🤗</h1>")
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port harsha ${port}`))




























// async function runSample(projectId) {
//   // A unique identifier for the given session
//   const sessionId = uuid.v4();

//   // Create a new session
//   const sessionClient = new dialogflow.SessionsClient();
//   const sessionPath = sessionClient.projectAgentSessionPath(
//     projectId,
//     sessionId
//   );

//   // The text query request.
//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: 'hello',
//         // The language used by the client (en-US)
//         languageCode: 'en-US',
//       },
//     },
//   };

//   // Send request and log result
//   const responses = await sessionClient.detectIntent(request);
//   console.log('Detected intent',responses[0].queryResult.fulfillmentMessages);
//   const result = responses[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`);
//   } else {
//     console.log('  No intent matched.');
//   }
// }
// // await runSample('test2-tsgl')
// server.listen(port,async () => {
//     await runSample('test2-tsgl')
//     console.log(`Server running at http://localhost:${port}/`);
//   });