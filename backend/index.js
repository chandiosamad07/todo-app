const express = require('express')
const app = express()
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/Todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(5000, () => console.log('Example app listening on port 3000!'))