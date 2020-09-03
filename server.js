
const express = require('express');
const cors = require('cors');
const router = require('./src/routes/routes.js')


var app = express();
app.use(express.json());
app.use(express.static(__dirname ));
app.use("/static", express.static(__dirname + '/src'));

// permite acesso ao endpoint por diferentes portas
app.use(cors());
app.use('/', router);

const APP_PORT = process.env.PORT || 3333;

app.listen(APP_PORT, () => console.log('The server has started 🚀')
);
