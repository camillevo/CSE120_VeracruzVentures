DELETE FROM Wise;
CREATE TABLE Wise (
    Time text,
    Canal_Level_PSI text,
    Flow_Meter text,
    Rain_Meter text,
    Sentek_1_sensor_depth text,
    Solar_Radiation text,
    Temp text,
    Wind_Direction text
);

INSERT INTO Wise (Time)
SELECT time 
FROM Canal_Level_PSI;

UPDATE Wise
SET Flow_Meter = 0;


UPDATE Wise
SET Canal_Level_PSI = (select value from Canal_Level_PSI where Canal_Level_PSI.time = Wise.Time);
UPDATE Wise
SET Rain_Meter = (select value from Rain_Meter where Rain_Meter.time = Wise.Time);
UPDATE Wise
SET Sentek_1_sensor_depth = (select value from Sentek_1_sensor_depth where Sentek_1_sensor_depth.time = Wise.Time);
UPDATE Wise
SET Solar_Radiation = (select value from Solar_Radiation where Solar_Radiation.time = Wise.Time);
UPDATE Wise
SET Temp = (select value from Temp where Temp.time = Wise.Time);
UPDATE Wise
SET Wind_Direction = (select value from Wind_Direction where Wind_Direction.time = Wise.Time);

CREATE TABLE Ag (
    Farm text,
    Field text,
    Crop text,
    Activity_Name text,
    Date_Due text,
    Start_Time text,
    End_time text,
    Active_Ingredient text,
    Cumulative_Area_acre text,
    Total_Application_Rate_gal_per_acre text,
    Volume_Rate_gal_per_acre text,
    Harvested_Weight_ton text
);

INSERT INTO Ag
SELECT *
FROM AgWorld