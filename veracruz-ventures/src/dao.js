//data access object

const sqlite3 = require('sqlite3')
const Promise = require('bluebird')

class AppDAO {
    constructor(dbFilePath) {
        this.db = new sqlite3.Database(~/data/testdata.sqlite , (err) =>{
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database')
            }
        })
    }

    run (sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql)
                    console.log(err)
                } else {
                    resolve({ id: this.lastID})
                }
            })
        })
    }

    get (sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, results) => {
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(reset)
                }
            })
        })
    }

    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }
}

module.exports = AppDAO