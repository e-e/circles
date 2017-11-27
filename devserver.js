const express = require('express');
const app = express();
const circlesApp = require('./index');
circlesApp.addRoutes('/circles', app);
app.get('/', (req, res) => {
  res.redirect('/circles');
});
app.listen(8888, () => console.log('listening on http://localhost:8888/'));
