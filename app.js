const express = require('express');
const ejs = require('ejs');
const path = require('path');

// --- Initialize Express ---
const app = express();


// --- Middleware setup ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'assets')));

// --- Set up EJS view engine ---
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get ('/', (req, res)=>{
  res.render('index')
})

app.get ('/page1', (req, res)=>{
  res.render('/page1')
})

app.get ('/page2', (req, res)=>{
  res.render('page2')
})
app.get ('/page3', (req, res)=>{
  res.render('page3')
})

app.get ('/page4', (req, res)=>{
  res.render('page4')
})

// --- Start the server ---
const port = 7000;
app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});