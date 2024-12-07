const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'This is first try', app: 'Node app' });
});

app.post('/', (req, res) => {
  console.log('hehe');
  res.status(200).send('This is post');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
