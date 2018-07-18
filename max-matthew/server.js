'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.get('',(request, response) => {
  console.log(`HEY! we are on port ${PORT}`);
  response.send('<h1>HELLO FROM THE OTHER SIDE OF A FULL-STACK APPLICATION</h1>');
});

app.post('/articles', (request, response) => {
  
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  console.log(response.status(201).json(request.body));
  response.status(201).json(request.body);
})
app.listen(PORT, () => {
console.log(`the Server us up on port ${PORT}`)})