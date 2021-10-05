import express from 'express';
import { add } from '../../client/src/add';

const app = express();
const port = 3001;

app.get('/api', (req, res) => {
  res.send(`1 + 1 = ${add(1, 1)}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
