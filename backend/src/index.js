const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const databaseUri =
  'mongodb+srv://lucasbittar:KYHSl8aCEHPQvLfA@cluster0-1c7mw.mongodb.net/week10?retryWrites=true&w=majority';

const connect = async () => {
  console.log(`Connecting to DB - uri: ${databaseUri}`);
  return mongoose.connect(databaseUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

connect()
  .then(() => {
    console.log('Database connected!');
  })
  .catch((e) => {
    console.log('Something went wrong: ', e.message);
  });

app.use(express.json());
app.use(routes);

// app.listen(3333);
const port = 3333;
app.listen(port, () => console.log(`Server ready at http://localhost:${port}`));

// HTTP Methods: get, post, put, delete

// Types of params
// Query Params: request.query (filters, sort, pagination)
// Route Params: request.params (change or delete data)
// Body: request.body (create or change data)

// MongoDB (non-relational)

