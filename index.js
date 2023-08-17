const express = require('express');
const app = express();
const port = 3000; 



app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data/mydatabase.db');


