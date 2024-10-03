const express = require('express');
const bodyparser = require('body-parser');
const books = require('./books');


const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.json(req.body);
})

app.get('/books', (req,res) => {
  res.json(books)

})

//add a new book
app.post('/api/newbook', (req, res) => {
  let title = req.body.title;
  let author = req.body.author;
  return res.send(`A new book is been added:  ${title} by ${author}.`)
})

//update a book
app.put('/api/books/:title', (req, res) => {
  const title  = req.params.title; // Get the book title from the URL
  const author  = req.body.author; // Get author from the request body
  
  const book = books.find(bookFound => bookFound.Title === title );
  
  if (book) {
    book.Author = author; // Modify the author
    book.Title = title;
    return res.send(`Book updated: ${title} by ${author}`);
  } else {
    return res.status(404).send(`Book not found: ${title}`);
  }
});



app.listen(3000, () => console.log('server started'));


/* TEST FOR API
pm.test("Status code is 200", function() {
    pm.response.to.have.status(200);
})*/