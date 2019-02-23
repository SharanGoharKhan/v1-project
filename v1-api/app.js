const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());


//when frontend and backend are on different url
//allowed methods, Options request is sent by browser before POST
//allowed content type e.g application/json
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

//for parsing, registering schema and matching our schema to resolvers 
//allows us to point at a schema,resolvers and automatically connect them 
//and route request to a parser then handle them according to our schema 
//and forward them to right resolvers
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);
//connection to mongodb 
mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD}@ds347665.mlab.com:47665/${process.env.MONGO_DB}`
  )
  .then(() => {
    app.listen(8000); //start server if db connected
  })
  .catch(err => {
    console.log(err);
  });
