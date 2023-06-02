const express = require('express');
const allRouters = require('./routes/routes');
const app = express();
const PORT = 8085;
// connecting port
app.listen(PORT, (req, res) => {
  console.log('listen at port :', PORT);
});

// home page if have.
app.get('/', (req, res) => {
  res.send('home page');
});

// all routes available here
app.use(allRouters);
