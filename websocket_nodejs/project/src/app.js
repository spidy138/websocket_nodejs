var express=require('express');
const bodyParser=require("body-parser");
const swaggerJsdoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const customerRoute=require('./routes/customerRoute.js');
const config=require('./config/configuration.js');


var port=3000;
var socketPort=4000;
var app=express();
app.use(bodyParser.json());
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
app.listen(port,()=>{
  console.log("server started listening on "+port)
});

