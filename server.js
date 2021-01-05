'use strict';

const tracer = require('dd-trace').init({
    logInjection: true
});

const bunyan = require('bunyan');
const log = bunyan.createLogger({
	name: "myapp",
});

const express = require('express')
const app = express()
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/hello', (req, res) => {
  log.info('Hello was accessed.');
  res.send('Hello World!')
})

app.get('/hi', (req, res) => {
  log.info('Hi was accessed.');
  res.send('Hi World!')
})

app.get('/error', (req, res) => {
	log.error('Some fake error here.');
	res.send('Error!')
  })

app.get('/warn', (req, res) => {
	log.warn('Some fake warning here.');
	res.send('Warning!')
  })

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);