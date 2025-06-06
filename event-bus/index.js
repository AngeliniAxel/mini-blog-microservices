const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhsot:4000/events', event);
    axios.post('http://localhsot:4001/events', event);
    axios.post('http://localhsot:4002/events', event);

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});
