const http = require('http');
var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    errorhandler = require('errorhandler'),
    // dialogflowIndex = require("./controller");
    index = require('./routes/index');

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();
app.use(cors({
  origin: function(origin, callback) {
    // allow requests from localhost or your production domain
    if (/^https?:\/\/localhost(:\d+)?$/.test(origin) || origin === 'https://chatbot-1trd.onrender.com/') {
      callback(null, true);
    }
    // otherwise, reject the request
    else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

// app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

app.use("/api/", index);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on port harsha ' + server.address().port);
  console.log("dialogflow project harsha ",process.env.DIALOGFLOW_PROJECT_ID)
});


































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