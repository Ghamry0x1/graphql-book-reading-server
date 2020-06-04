const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
require('dotenv').config();

const schema = require('./schema/schema');

const app = express();

const PORT = 4000;

const connectionString = `mongodb://${process.env.db_user}:${process.env.db_pass}@ds237373.mlab.com:37373/gqlbooklist`;
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

mongoose
  .connect(connectionString, connectionOptions)
  .then(() => {
    console.log('- Connected to the db');

    app.use(
      '/graphql',
      graphqlHTTP({
        schema,
        graphiql: true
      })
    );
  })
  .catch((err) => {
    throw err;
  });

app.listen(PORT, console.log(`- Listening on port ${PORT}`));
