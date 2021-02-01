const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes/index');
const scheduler = require('./scheduler');

scheduler.initialize().catch(error => console.error('initialize error', error));

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(bodyParser.json({
  limit: '100mb',
}));

app.use('/', new Routes());

server.listen(port, (err) => {
  if (err) console.error('Error while starting server', err);
  else console.info('Server started on Port:', port);
});

process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection...', reason);
});
