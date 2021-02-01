const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const Routes = require('./routes');

const app = express();

const server = https.createServer(app);

const port = 3000;

app.use(bodyParser.json({
  limit: '100mb',
}));

app.use(express.static('./public/dist'));
app.use('/', new Routes());

server.listen(port, (err) => {
  if (err) console.error('Error while starting server!!', err);
  else console.info('Server started and listening on Port:', port);
});

process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection....', reason);
});
