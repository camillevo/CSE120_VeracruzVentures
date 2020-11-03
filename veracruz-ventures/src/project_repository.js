//https://stackabuse.com/a-sqlite-tutorial-with-node-js/

class ProjectRepository {
    constructor(dao) {
        this.dao
    }

    createTable() {
        const sql = '.mode csv .import ~/data/AgWorldV1.csv practicetable1'
        return this.dao(sql)
    }

    update(project) {
        const { Farm, Field, Activity_Name, Date_Due, Start_Time, Stop_Time, Cost_Dollars, Total_Application_Rate_gal_per_acre, Cumulative_Area_acre} = practicetable1
        return this.dao.run(
            'UPDATE practice SET Farm = ?, Field = ?, Activity_Name = ?, Date_Due = ?, Start_Time = ?, Stop_Time = ?, Cost_Dollars = ?, Total_Application_Rate_gal_per_acre = ?, Cumulative_Area_acre = ?',
            [Farm, Field, Activity_Name, Date_Due, Start_Time, Stop_Time, Cost_Dollars, Total_Application_Rate_gal_per_acre, Cumulative_Area_acre]
        )
    }

    delete(Activity_Name) {
        return this.dao.run(
            'DELETE FROM practicetable1 WHERE Activity_Name = ?',
            [Activity_Name]
        )
    }

    getByActivityName(Activity_Name) {
        return this.dao.get (
            'SELECT * FROM practicetable1 WHERE Activity_Name = ?'
        )
    }

    getAll() {
        return this.dao.all ('SELECT * FROM practicetable1')
    }
}

module.exports = ProjectRepository;