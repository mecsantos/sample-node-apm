'use strict';

const tracer = require('dd-trace').init({
    logInjection: true
});

const bunyan = require('bunyan');
const log = bunyan.createLogger({
	name: "myapp",
	// streams: [
	//     {
	//         level: 'info',
	//         path: './logs.json'
	//     }
	//   ]
});

const express = require('express')
const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  log.info('Hello World!');
  res.send('Hello World!')
})

app.get('/hi', (req, res) => {
  log.info('Hi World!');
  res.send('Hi World!')
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);