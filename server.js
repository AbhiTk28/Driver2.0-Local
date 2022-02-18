const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/driver-db';
const socketIO = require('socket.io');
const http = require('http').Server(app);
let io = socketIO(http);

mongoose.set('debug', true);

const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let assetsRoutes = require('./app/routes/assets.routes.js');
let companiesRoutes = require('./app/routes/companies.routes.js');
let activityRoutes = require('./app/routes/activity.routes.js')

app.use('/api', assetsRoutes);
app.use('/api', companiesRoutes);
app.use('/api', activityRoutes);


let serverPort = process.env.YOUR_PORT || process.env.PORT || 8080;

// // Create a Server
// let server = app.listen(serverPort, function () {
//
//     let host = server.address().address;
//     let port = server.address().port;
//
//     console.log("App listening at http://%s:%s", host, port)
// });

http.listen(serverPort, function () {
    console.log('Listening to port ', serverPort);
});

mongoose.connect(url, { useUnifiedTopology: true });

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        converted.id = converted._id;
        delete converted._id;
        delete converted.__v;
        delete converted.__t;
    }
});

db.once('open', _ => {
    console.log('Database connected:', url)
});

db.on('error', err => {
    console.error('connection error:', err)
});

app.post('/addUser', (request, response)=>{
    response.json(request.body);
});

app.post('/login/approve', function(req, res){
    const vehicleId = req.body?.vehicleId;
    if(vehicleId !== undefined) {
        io.emit('LoginApprove', {loginApproved : true, vehicleId})
        res.send({success: true});
    } else {
        res.status(400);
        res.send({success:false})
    }
});

app.post('/login/reject', function(req, res){
    const vehicleId = req.body?.vehicleId;
    if(vehicleId !== undefined) {
        io.emit('LoginReject', {loginRejected : true, vehicleId})
        res.send({success: true});
    } else {
        res.status(400);
        res.send({success:false})
    }
});

app.post('/login/cancel', function(req, res){
    const vehicleId = req.body?.vehicleId;
    if(vehicleId !== undefined) {
        io.emit('LoginCancel', {loginCancel : true, vehicleId})
        res.send({success: true});
    } else {
        res.status(400);
        res.send({success:false})
    }
});

io.on('connection', (socket) => {
    console.log('WebSocket New user connected');
    //emit message from server to user
    socket.on('createMessage', (newMessage) => {
        console.log('newMessage', newMessage);
    });
    // when server disconnects from user
    socket.on('disconnect', () => {
        console.log('disconnected from user');
    });
});



