const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./data/practicedata.sqlite', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
  db.each(`SELECT *
           FROM AgWorldPractice`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.farm + "\t" + row.farmId + "\t" + row.activity + "\t" + row.dateDue);
  });
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});