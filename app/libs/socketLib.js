/* This files containes all the sockets code that our proect need*/

/**modules dependencies. */
const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require("./tokenLib.js");
const check = require("./checkLib.js");
const response = require('./responseLib');

const EventModel = mongoose.model('Event');

let setServer = (server) => {
    let io = socketio.listen(server)

    let myIo = io.of('/');

    myIo.on('connection', (socket) => {
        console.log('connection Made')
    });
}



module.exports = {
    setServer: setServer
}