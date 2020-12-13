const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("views", [path.join(__dirname, "src/views")]);

app.set('view engine', 'pug') 

// Routes
app.use(require('./src/routes/home'));
app.use(require('./src/routes/books'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})