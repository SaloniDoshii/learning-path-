// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//      var myObj = {
//         name: 'Pia',
//         job: 'Ninja',
//         age: 22
//      };
//      res.end(JSON.stringify(myObj));
// });

// server.listen(3000, '127.0.0.1');
// console.log('Hey everyone, now listen to port 3000');

// const express = require("express");
// const EventEmitter = require("events");
// const app = express()
// const event= new EventEmitter();

// let count=0

// event.on("countAPI",()=>{
//     count++;
//     console.log("event called",count)
// })

// app.get("/", (req, resp) =>{
//     resp.send("api called")
//     event.emit("countAPI");
// })

// app.get("/search", (req, resp) =>{
//     resp.send(" search api called")
//     event.emit("countAPI");
// })

// app.get("/update", (req, resp) =>{
//     resp.send(" update api called")
//     event.emit("countAPI");
// })

// app.listen(4000);