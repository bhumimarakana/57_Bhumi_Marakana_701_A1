const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from que_8!');
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`);
});



//this is a package json file script line
//"test": "echo \"Error: no test specified\" && exit 1",