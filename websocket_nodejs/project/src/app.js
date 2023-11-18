var express=require('express');
const bodyParser=require("body-parser");
const swaggerJsdoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const customerRoute=require('./routes/customerRoute.js');
const config=require('./config/configuration.js');
const socketIO=require('socket.io');
const http=require('http');
const cors=require('cors');
var port=3000;
var socketPort=4000;
var app=express();
app.use(bodyParser.json());
app.use(cors);
// const swaggerdefinition=require('../src/config/swaggerDef');
const definition ={
  info: {
    // API information (required)
    title: 'swagger', // Title (required)
    version: '1.0.0', // Version (required)
  },
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
  paths:{
      "/customermanagement/api/v1/Customer":{
        "get":{
          "description":"creates customers"
        }
      }
  }
};
const options={
  definition ,
  apis:['${__dirname}/routes/abc.js'],
};
const swaggerSpec=swaggerJsdoc(options);
app.use('/swagger',swaggerUI.serve,swaggerUI.setup(swaggerSpec));
app.get('/about',(req,res)=>{
res.send("<h1>Hey, it works!</h1>");
});
app.use('/',customerRoute);



const server = http.createServer(app);

const io = require("socket.io")(server, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('message',function(data){
    socket.emit('message', data);
    io.sockets.emit('broadcast',{ description: data + ' data to  all the client from connected!'});  
  });
  
})


server.listen(3000);