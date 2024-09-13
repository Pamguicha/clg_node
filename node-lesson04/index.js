const express = require('express');
const app = express();
const port = 3000;

//3-Build a response that returns 'hello world' on the root path:
app.get('/', (req, res) => {
  res.send('Hello world')
});

//4-Now modify the middleware to add a new route “firstServer” and display a message “Hi there! This is my first route built using express framework”

app.get('/firstServer', (req,res) => {
  res.send(`Hi there! This is my first route built using express framework`);
})

//Now modify the middleware to add a new route that will accept “firstUser/:id” and display the message "Hi there, your user ID is ...

app.get('/firstUser/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Hi there, your user ID is ${userId}`)
})

//Now modify your code to handle a route that does not exist. Return a 404 page for a route that's not handled eg. '/noroute'.
app.use((req, res, next) => {
  if(!req.route)
    return next (new Error('<h1>404 Not Found</h1>'));
  next();
})

app.use((err, req, res, next) => {
  res.send(err.message);
})


app.listen(port, () => {
  console.log(`Example app listening on port yahoo ${port}!`);
});

