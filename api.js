const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
app.get('/api/test', (req, res) => {
 res.send('The API is working!');
2 / 12
});
app.listen(port, () => {
 console.log(`listening on port ${port}`);
});

const Device = require('./models/device'); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
   });


app.get('/api/devices', (req, res) => {
    Device.find({}, (err, devices) => {
    if (err == true) {
    return res.send(err);
    } else {
    return res.send(devices);
    }
    });
   });

   app.post('/api/devices', (req, res) => {
    console.log(req.body);
   });