const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/html');
	res.send('<h1 align="center">Hi</h1>');
});

app.listen(port);