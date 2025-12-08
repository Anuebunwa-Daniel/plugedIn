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

app.get ('/about-us', (req, res)=>{
  res.render('about-us')
})

app.get ('/find_a_pro', (req, res)=>{
  res.render('find_a_pro')
})
app.get ('/professionals', (req, res)=>{
  res.render('professionals')
})

app.get ('/waitlist', (req, res)=>{
  res.render('waitlist')
})


// --- Start the server ---
const port = 7000;
app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});