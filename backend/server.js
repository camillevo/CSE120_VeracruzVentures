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

var dataArr1 = [];
var dataArr2 = [];

db.serialize(() => {

    db.all("SELECT * FROM Ag", function(err, rows) {
        rows.forEach(function(row) {
            dataArr1.push({
                "farm": row.Farm,
                "field": row.Field,
                "crop": row.Crop,
                "activity": row.Activity_Name,
                "dateDue": row.Date_Due,
                "startTime": row.Start_Time, 
                "stopTime": row.End_time,
                "activeIngredient": row.Active_Ingredient,
                "cumulativeArea": row.Cumulative_Area_acre,
                "totalApplicationRate": row.Total_Application_Rate_gal_per_acre,
                "volumnRate": row.Volume_Rate_gal_per_acre,
                "harvestedWeight": row.Harvested_Weight_ton
            })
        });

        // fs.writeFile('data.json', JSON.stringify(dataArr), (err) => {
        //     if (err) {
        //         throw err;
        //     }
        // });
    });

    db.all("SELECT * FROM Wise", function(err, rows) {
        rows.forEach(function(row) {
            dataArr2.push({
                "time": row.Time,
                "canal": row.Canal_Level_PSI,
                "flow": row.Flow_Meter,
                "rain": row.Rain_Meter,
                "sentek": row.Sentek_1_sensor_depth,
                "solar": row.Solar_Radiation, 
                "temp": row.Temp,
                "wind": row.Wind_Direction,
            })
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

app.get("/agworld", (req, res) => {
    res.send(JSON.stringify(dataArr1));
});

app.get("/wiseconn", (req, res) => {
    res.send(JSON.stringify(dataArr2));
});

app.get("/", (req, res) => {
    res.send(res.json({ data: 'test' }));
});