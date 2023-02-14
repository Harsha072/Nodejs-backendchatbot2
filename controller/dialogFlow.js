const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
require('dotenv').config()

const sessionId = uuid.v4();
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runIntent(projectId, requestText,event) {
// A unique identifier for the given session
console.log("hello")
// console.log(projectId,requestText,event,process.env.DIALOGFLOW_PRIVATE_KEY,process.env.DIALOGFLOW_CLIENT_EMAIL)
try{

    let config = {
        credentials: {
            private_key: process.env.DIALOGFLOW_PRIVATE_KEY,
            client_email: process.env.DIALOGFLOW_CLIENT_EMAIL
        }
    }
    
    const sessionClient = new dialogflow.SessionsClient(config);
    
    const sessionPath = sessionClient.projectAgentSessionPath(
        projectId,
        sessionId
    );
    

const intentRequest = {
    session: sessionPath,
    queryInput: {
    text: {
        // The query to send to the dialogflow agent
        text: requestText,
        // The language used by the client (en-US)
        languageCode: 'en-US',
    },
    },
};

const intentRequestIntro = {
    session: sessionPath,
    queryInput: {
        event:{
         name:event,
         languageCode: 'en-US',
        },
    text: {
        // The query to send to the dialogflow agent
        text: requestText,
        // The language used by the client (en-US)
        languageCode: 'en-US',
    },
    },
};

// // The text query request.
// // Send request and log result

if(event){
    const responses = await sessionClient.detectIntent(intentRequestIntro);
console.log(responses[0].queryResult.fulfillmentMessages[0].payload)
const result = responses[0].queryResult;
console.log(responses[0].responseId)
return await {
        
    "id":responses[0].responseId,
    "Query": result.queryText,
    "Response": result.fulfillmentText,
    "Intent": result.intent.displayName
};
}
else{
    const responses = await sessionClient.detectIntent(intentRequest);
    
    console.log(responses[0].queryResult)
    const result = responses[0].queryResult;
    console.log(responses[0].responseId)
    return await {
        
        "id":responses[0].responseId,
        "Query": result.queryText,
        "Response": result.fulfillmentText,
        "Intent": result.intent.displayName
    };
}

}
catch(error){
    console.log("the error")

}



}

module.exports.runIntent = runIntent;