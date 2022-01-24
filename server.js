var express = require('express');
var path = require('path');
var app = express();

const PORT = process.env.PORT ?? 8080;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.listen(PORT, () => {
  console.log(`started on port ${PORT}`);
});
