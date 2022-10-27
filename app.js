const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
	res.setHeader('Content-Type', 'application/json');

	next();
});

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.send('<h1 align="center">Hello</h1>');
});

app.listen(port);