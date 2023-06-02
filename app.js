const express = require('express');
const allRouters = require('./routes/routes');
const app = express();
const PORT = 8085;
app.listen(PORT, (req, res) => {
  console.log('listen at port :', PORT);
});

app.get('/', (req, res) => {
  res.send('home page');
});
app.use(allRouters);
