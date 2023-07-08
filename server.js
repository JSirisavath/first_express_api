let express = require('express');

let routes = require('./routes/routes');

let path = require('path');

let app = express();

// This is how to allow our server port to serve our vue app

// Our file path to the hello vue app
let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist');

// Tell express to look for this directory(dist or our build production files) to serve its api server data/ files to this path (final vue app)
// express.static is a method to refer that the build files are never changing
let vueApp = express.static(pathToVueApp);

app.use('/', vueApp); // Use '/' to serve our home page, which is the vue app

app.use('/api', routes);

// If computer specified a particular port to use, if not a port 3000
// Server port to see JSON message is "http://127.0.0.1:3000/api"
let server = app.listen(process.env.PORT || 3000, function () {
  console.log('express server running on port', server.address().port);
});
