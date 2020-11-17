const express = require("express"),
app = express(),
port = process.env.PORT || 5000,
cors = require("cors");
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

let db = new sqlite3.Database('./data/practice.sqlite', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

var dataArr = [];

db.serialize(() => {

    db.all("SELECT * FROM AgWorldPractice", function(err, rows) {
        rows.forEach(function(row) {
            dataArr.push({
                "farm": row.Farm,
                "field": row.Field,
                "activity": row.Activity_Name,
                "dateDue": row.Date_Due
            })
        });

        fs.writeFile('data.json', JSON.stringify(dataArr), (err) => {
            if (err) {
                throw err;
            }
        });
    });

});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

app.get("/", (req, res) => {
    res.send(JSON.stringify(dataArr));
});

app.get("/pp", (req, res) => {
    res.send(res.json({ data: 'test' })
    );
});