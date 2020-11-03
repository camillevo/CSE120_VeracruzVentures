const sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('./data/testdata.sqlite', (err) =>{
    if(err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database')
})

db.serialize(() => {
    db.each(`SELECT *
             FROM AgWorldPractice`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.Farm + "\t" + row.Field) ;
    });
  });

db.close((err) => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Close the database connection.')
})