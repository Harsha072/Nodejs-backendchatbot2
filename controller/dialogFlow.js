const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const { someFunction } = require('../config');

require('dotenv').config()

const sessionId = uuid.v4();
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */
async function runIntent(projectId, requestText,event) {
    const [Dkey, Demail]= await someFunction()
// A unique identifier for the given session
console.log("hello",projectId,Demail);
const privateKeyString = Dkey
const privateKeyBuffer = Buffer.from(privateKeyString, 'utf8');
try{

    let config = {
        credentials: {
            private_key:Dkey,
            // "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCtHE/wHTeebxBe\nCzegWggEXE0C7LJj5YZy2NNV/zbEhjmYu++Xg7aek5oITVJZOYW2jtGn61cTl+jo\nD2e330JIKi7GCBhpD3YpJAIv38zTDYaUB0Shh9SjH/O0fNcf6Wutac469QtewDzo\nWkAWSLuui+sASXbfV8emWsxOYTELFcGnWqKdQQiLWcXyywx5dchzBOmOYVLyLDOm\n6zDojwetJsvHrPbrSrsZhv6pLuFgAE1HT7fj00AGDhz4MKN2/kSBdPzNKbcOnVB9\nbOzX7F2EfJI2oAXrwMf/Z3VqV6+KvDgRRnftLz+P0VFokxQaf9A37ivcyt52vtgW\npPVx3SAxAgMBAAECggEATYbk/AWxv4hA/cUrS+qWNZG6wakMuXV1MaEOgLCUMA5m\n5BKi2inYUwuKi9ZJH4GF8zziA0CAFlvNqIQhsLTRg+00VmcQu5h7lDA2tIcXvZuM\nnmXk5CynW8j3BWl1lKqemSLOBBRzW6Nfg7XLhs9bEnBCNjYwgRTYapW2cxHO+4Wt\nzI9vN/4svoZ6QnO0tMw2sbEqPoNMvyum0huvVtFblUodq79lH4MT4xAhdl8n+xJk\nTxtJTWOQ1PhARFEGYPAPzpYtnhBza8WviaPkZNG2O4Rtz4ZFtL6Com/5HnnG6wAy\ncZAk2qo4SIQU7ncwDmqlnVqPSbS9m4pgvPdgVhuwMwKBgQDUPwXPMCdy1YSlKyUF\njYzyZ54dsp+l8M1c/EyADUnoT/dYCUJVQugUXMANMIaVMach33u/+X81KAOIlC0n\nVyL6MF3da2rqL9P+th+t5yZ1h1PxeNw07e+nVPp8gP4AH8G9qZeXg3VNoxG/iL7V\nYWp6cP8kug5+GU2I+QTE88eFcwKBgQDQy/eNjbMxddYHPxBlmKTfgAx3OuOLy8PQ\nrkmaKVKuluXxKTtjlBrEuRZlykYpUQmZJvtyHIRM3z6H+5kV9kYxAPSdrB5focLF\nUFqRlMri2F4AForzP2Wh3h77iHGPCM82WjYBajxnJy3mvrbeWdBNnhPaBJic4ICF\nvnhiF1z6ywKBgGBYH1X2YOHSpHypQgvsPj/G41JNxAR6c24zJLK31YW7zuZKha7Y\nSSr9Ezype138BQbuQGlbYvAJMtlrkbea6UiybdlVqlmVzmB/4Y96Ls4I2QTyvNrV\n6wSFIZMkpqf9wl9KvYJMbRIJ5MOR2jZYGxJrepX8UxnQeI6loxGYK0ibAoGAHqEt\nSZi15tWQdjOsJhtEZH0WVw9Ofh2ANka7CWByfqYoST5xNeRuINm+DWSk8j6vF8Z+\nMHk6d0RwmeYwyOX92gZ33AF52zGRrvxgrOaU9L4k3AJyk8iDEkHRbbjQX9k8/I4z\nSfXZspAuzaDAltG6GwjLhLoT4T+V2wjcBBfFTg0CgYB8xfByOta9xb9CDyRSTtBk\nWz4zUizV/84bkNPbIYGwImob9WeXCwOK7OizSwLhCIrsVIM8w1fvfUpXUVX0H4VY\nD/iRsfizcLWl8wACg5cPO/GiqLXfMOALuRTKXcMI8MrPDBtMVFItExTbzojlaGGB\ndFpYxcJru8iU7AGTs+VFhQ==\n-----END PRIVATE KEY-----\n",
            client_email: Demail
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
    console.log("event is there:::: ",intentRequestIntro)
    const responses = await sessionClient.detectIntent(intentRequestIntro);
    console.log("after event is there:::: ")
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
    console.log("else event is not there harsha:::: ",intentRequest)
    const responses = await sessionClient.detectIntent(intentRequest);
    console.log("afetr else event is there harsha:::: ")
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
    console.log("the error",error)

}



}

module.exports.runIntent = runIntent;