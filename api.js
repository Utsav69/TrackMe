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

   require("path/to/user.js");



return res.json({
    success: true,
    message: 'Authenticated successfully',
    isAdmin: found.isAdmin
});

const newUser = new User({
    name: user,
    password,
    isAdmin
   });

   newUser.save(err => {
    return err
    ? res.send(err)
    : res.json({
    success: true,
    message: 'Created new user'
    });
   });

   app.get('/api/devices/:deviceId/device-history', (req, res) => {
    const { deviceId } = req.params;
    Device.findOne({"_id": deviceId }, (err, devices) => {
    const { sensorData } = devices;
    return err
    ? res.send(err)
    : res.send(sensorData);
    });
   });



app.use(express.static(`${__dirname}/public`));
app.get('/docs', (req, res) => {
 res.sendFile(`${__dirname}/public/generated-docs/index.html`);
});

app.get('/api/users/:user/devices', (req, res) => {
    const { user } = req.params;
    Device.find({ "user": user }, (err, devices) => {
    return err
    ? res.send(err)
    : res.send(devices);
    });
   });



/**
* @api {get} /api/devices AllDevices An array of all devices
* @apiGroup Device
* @apiSuccessExample {json} Success-Response:
2 / 3
* [
* {
* "_id": "dsohsdohsdofhsofhosfhsofh",
* "name": "Mary's iPhone",
* "user": "mary",
* "sensorData": [
* {
* "ts": "1529542230",
* "temp": 12,
* "loc": {
* "lat": -37.84674,
* "lon": 145.115113
* }
* },
* {
* "ts": "1529572230",
* "temp": 17,
* "loc": {
* "lat": -37.850026,
* "lon": 145.117683
* }
* }
* ]
* }
* ]
* @apiErrorExample {json} Error-Response:
* {
* "User does not exist"
* }
*/