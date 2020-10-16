CREATE TABLE WiseConPractice (
    fieldID char(4,0) not null,
    cropType char(30,0) not null,
    irrigationType char(30,0) not null,
    startTime char(10,0) not null,
    stopTime char(10,0) not null,
    runTime decimal(3,0) not null,
    avgFlow decimal(2,0) ,
    totalWater decimal(10,0) not null,
    fertStartTime char(10,0) ,
    fertEndTime char(10,0) ,
    fertRate decimal(2,0) not null,
    totalFertApp decimal(5,0) 
);

-- .mode "csv"
-- .separator ","
-- .import "AgWorldExportV2 - WiseConn.csv" WiseConPractice

CREATE TABLE AgWorldPractice (
    farm char(30,0) not null,
    fieldID char(4,0) not null,
    activity char(30,0) not null,
    dateDue char(8,0) not null,
    startTime char(10,0),
    stopTime char(10,0),
    cost decimal(6,0) not null,
    totalAppRate decimal(3,0) not null,
    totalArea decimal(4,0) not null
)

-- .mode "csv";
-- .separator ",";
-- .import "AgWorldExportV2 - AgWorldExportV1.csv" AgWorldPractice;