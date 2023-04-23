const http = require('http');
const cookieParser = require('cookie-parser')
const config = require("./config")



const db = require("./db")
var express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    errorhandler = require('errorhandler'),
    // dialogflowIndex = require("./controller");
    index = require('./routes/index');
    
    var app = express();

    const sessionMiddleware = session({
      secret: 'some secret string',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 180000 // 3 minutes in milliseconds
      }
    });
    app.use(sessionMiddleware);
    sessionMiddleware.debug = true;


// app.use(cors({
//   credentials:true,
//   origin: function(origin, callback) {
//     // allow requests from localhost or your production domain
//     if (origin==='http://localhost:4200' || origin === 'http://chatbot-appv1.s3-website-us-east-1.amazonaws.com') {
//       callback(null, true);
//     }
//     // otherwise, reject the request
//     else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// }));



// app.use(function(req, res, next) {
//   const origin = req.headers.origin;
//   if (origin === 'http://localhost:4200') { 
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   } else if (origin === 'http://chatbot-appv1.s3-website-us-east-1.amazonaws.com') {
//     res.header("Access-Control-Allow-Origin", "http://chatbot-appv1.s3-website-us-east-1.amazonaws.com");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   }
//   next();
// });

app.use(cors());

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));
var isProduction = process.env.NODE_ENV === 'production';
app.use("/api/", index);

    


// app.use(session({ secret: 'conduit', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

 
app.get("/test", (req, res) => {
  console.log("test")
  res.send("<h1>It's working 🤗</h1>")
})
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
var server = app.listen(process.env.PORT || 8080, function(){
  console.log('Listening on port harsha ' + server.address().port);
  // config.someFunction()
  db.connectDb()
 
});

