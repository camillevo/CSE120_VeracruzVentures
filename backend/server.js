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
var dataArrWS = [];
var dataArrField = [];

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
    
    // MAKE THE AGWORLD DATES COMPATIBLE TO SQLITE BECAUSE M/D/Y FORMAT IS FOR PLEBS
		db.all("CREATE VIEW agWorkableDates AS SELECT date(y || '-' || m || '-' || d) as date, * FROM (SELECT Date_Due, (cast(substr(Date_Due, -1, -3) as INTEGER) * 10 + cast(substr(Date_Due, -1, 1) as INTEGER)) as y, CASE WHEN length('0' || (cast(substr(Date_Due, 0, 3) as INTEGER))) == 2 THEN '0' || (cast(substr(Date_Due, 0, 3) as INTEGER)) ELSE (cast(substr(Date_Due, 0, 3) as INTEGER)) END m, CASE WHEN length('0' || (cast(substr(Date_Due, 3, 4) as INTEGER) | cast(substr(Date_Due, 4, 4) as INTEGER))) == 2 THEN ('0' || (cast(substr(Date_Due, 3, 4) as INTEGER) | cast(substr(Date_Due, 4, 4) as INTEGER))) ELSE (cast(substr(Date_Due, 3, 4) as INTEGER) | cast(substr(Date_Due, 4, 4) as INTEGER)) END d, * FROM AgWorld);", (err) => {
			if (err) {
			  return console.error(err.message);
			}
			console.log('Created view.');
		});
    
    // QUERY FOR DAILY SCHEDULE
    // replace sample date (2021-01-10) with 'now' to get the weekly schedule starting today
	db.all("SELECT * FROM (SELECT date, Farm, Field, Crop, Activity_Name FROM agWorkableDates WHERE abs(julianday('2021-01-10') - julianday(date)) < 8 and julianday('2021-01-10') <= julianday(date) UNION SELECT substr(Time, 0, 11) as date, ' . ' as Farm, ' . ' as Field, ' . ' as Crop, 'WiseConn Irrigation' as Activity_Name FROM Wise WHERE abs(julianday('2021-01-10') - julianday(substr(Time, 0, 11))) < 8 and julianday('2021-01-10') <= julianday(substr(Time, 0, 11)) GROUP BY julianday(substr(Time, 0, 11))) ORDER BY date asc;", function(err, rows) {
		rows.forEach(function(row) {
			dataArrWS.push({
				"date": row.date,
				"farm": row.Farm,
				"field": row.Field,
				"crop": row.Crop,
				"activity": row.Activity_Name
			})
		});
	});
	
	// QUERY FOR THE FIELDS
	db.all("SELECT distinct Farm, Crop FROM Ag;", function(err, rows) {
		rows.forEach(function(row) {
			dataArrField.push({
				"farm": row.Farm,
				"crop": row.Crop
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

app.get("/schedule", (req, res) => {
	res.send(JSON.stringify(dataArrWS));
});
app.get("/fields", (req, res) => {
	res.send(JSON.stringify(dataArrField));
});

app.get("/", (req, res) => {
    res.send(res.json({ data: 'test' }));
});
