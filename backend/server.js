const express = require("express"),
app = express(),
port = process.env.PORT || 5000,
cors = require("cors");
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

let db = new sqlite3.Database('./data/data.sqlite', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

var dataArr = [];
let mearr = [];

db.serialize(() => {

    db.all("SELECT * FROM AgWorldPractice", function(err, rows) {
        rows.forEach(function(row) {
            dataArr.push({
                "farm": row.farm,
                "farmId": row.farmId,
                "activity": row.activity,
                "dateDue": row.dateDue
            })
        });
        mearr.push(JSON.stringify(dataArr));

        fs.writeFile('data.json', mearr, (err) => {
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
    res.send(mearr);
});