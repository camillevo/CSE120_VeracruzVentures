import React from "react";
import { makeStyles } from '@material-ui/core/styles';
const sqlite3 = require('sqlite3').verbose();

const Dashboard = () => {
    

    // open the database
    let db = new sqlite3.Database('./data/practicedata.sqlite');

    let sql = `SELECT * FROM AgWorldPractice`;

    db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        return <div>row.farm + "\t" + row.fieldID</div>;
        });
    });
    

// close the database connection
db.close();

    
};

export default Dashboard;





