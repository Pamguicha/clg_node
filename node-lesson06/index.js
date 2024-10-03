const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.json(req.body);
})

app.get('/expense', (req,res) => {
  res.json({"Name":"Pamela", "expense":"clothes", "amount": 200})

})

app.post('api/users', (req, res) => {
  let user
})


app.listen(3000, () => console.log('server started'));
