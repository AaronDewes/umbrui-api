const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');


app.use(bodyParser.json({ type: 'application/json' }));

app.get('/version', (req, res) => {
  res.send('0');
})

app.post('/save', (req, res) => {
  fs.writeFile('./data.json', JSON.stringify(req.body), (err) => {
    if (err) {
      res.send('false');
    } else {
      res.send('true');
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
