// server.js
var app = require('./app');
var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Smart Irrigation System server listening on port ' + port);
});
