var path = require('path');
var express = require('express');
var router = require('./lib/router');
var _a = process.env.PORT,
  PORT = _a === void 0 ? 3001 : _a;
var app = express();
// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());
// Serve API requests from the router
app.use('/api', router);
// Serve app production bundle
app.use(express.static('dist/app'));
// Handle client routing, return all requests to the app
app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});
console.log('hello from typescript');
app.listen(PORT, function () {
  console.log('Server listening at http://localhost:'.concat(PORT));
});
