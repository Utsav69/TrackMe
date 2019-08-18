const mqtt = require('mqtt');
const { URL, USERNAME, PASSWORD } = process.env;
const client = mqtt.connect(URL, {
 username: USERNAME,
 password: PASSWORD
});
client.on('connect', () => {
 console.log('connected');
 const topic = '/test/hello/';
const msg = 'Hello MQTT world!';
client.publish(topic, msg, () => {
 console.log('message sent...');
});
});

const mqtt = require('mqtt');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { URL, USERNAME, PASSWORD } = process.env;
const port = process.env.PORT || 5001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
const client = mqtt.connect(URL, {
 username: USERNAME,
 password: PASSWORD
});
client.on('connect', () => {
 console.log('mqtt connected');
});
app.listen(port, () => {
 console.log(`listening on port ${port}`);
});

