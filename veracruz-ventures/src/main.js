const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

// open database in memory
let db = new sqlite3.Database('./data/practicedata.sqlite', (err) => {
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

//     dataArr.push("test2");
//     for(i = 1; i < 5; i++) {
//         dataArr.push(i + " ");
//     }
//   db.each(`SELECT * FROM AgWorldPractice`, (err, row) => {
//     if (err) {
//       console.error(err.message);
//     }
//     const curr = {
//         "farm": row.farm,
//         "farmId": row.farmId,
//         "activity": row.activity,
//         "dateDue": row.dateDue
//     }
//     dataArr.push(curr);
//     console.log(row.farm + "\t" + row.farmId + "\t" + row.activity + "\t" + row.dateDue);
//     dataArr.push("test3");
//   }, function(err, rows){ //callback for completion of .each method
//     console.log(dataArr); //you can have your array printed here
// });
});


const data = JSON.stringify(dataArr);

// write JSON string to a file
fs.writeFile('data.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});