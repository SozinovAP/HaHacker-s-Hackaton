
const sqlite3 = require('sqlite3').verbose();

const ORDERS_TABLE = "orders";
const CRITERIA_TABLE = "criteria";
const LIST_TABLE = "list";
const MEDICATIONS_LIST_TABLE = "medications";
const SERVICES_LIST_TABLE = "services";

const DISEASE_CODE_COLUMN = "code";
const AGE_COLUMN = "age";
const ORDER_CLAUSE_COLUMN = "orderClause";
const STANDARD_COLUMN = "standard";
const CRITERIA_COLUMN = "criteria";
const SERVICE_COLUMN = "services";
const MEDICATIONS_COLUMN = "medications";
const CODE_COLUMN = "code"
const NAME_COLUMN = "name"

function CreateDB()
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        let sql = "CREATE TABLE IF NOT EXISTS " + ORDERS_TABLE + " (" +
            DISEASE_CODE_COLUMN + " VARCHAR(255) NOT NULL, " +
            AGE_COLUMN + " INTEGER NOT NULL, " +
            ORDER_CLAUSE_COLUMN + " VARCHAR(255) NOT NULL, " +
            STANDARD_COLUMN + " VARCHAR(255) NOT NULL," +
            "PRIMARY KEY (" + DISEASE_CODE_COLUMN + ", " + AGE_COLUMN + "))";
        db.run(sql);

        sql = "CREATE TABLE IF NOT EXISTS " + CRITERIA_TABLE + " (" +
            ORDER_CLAUSE_COLUMN + " VARCHAR(255) NOT NULL, " +
            CRITERIA_COLUMN + " VARCHAR(255) NOT NULL, " +
            "PRIMARY KEY (" + ORDER_CLAUSE_COLUMN + "))";
        db.run(sql);

        sql = "CREATE TABLE IF NOT EXISTS " + LIST_TABLE + " (" +
            STANDARD_COLUMN + " VARCHAR(255) NOT NULL," +
            SERVICE_COLUMN + " VARCHAR(255) NOT NULL, " +
            MEDICATIONS_COLUMN + " VARCHAR(255) NOT NULL, " +
            "PRIMARY KEY ( " + STANDARD_COLUMN + "))";
        db.run(sql);

        sql = "CREATE TABLE IF NOT EXISTS " + MEDICATIONS_LIST_TABLE + " (" +
            CODE_COLUMN + " VARCHAR(255) NOT NULL," +
            NAME_COLUMN + " VARCHAR(255) NOT NULL, " +
            "PRIMARY KEY ( " + CODE_COLUMN + "))";
        db.run(sql);
        sql = "CREATE TABLE IF NOT EXISTS " + SERVICES_LIST_TABLE + " (" +
            CODE_COLUMN + " VARCHAR(255) NOT NULL," +
            NAME_COLUMN + " VARCHAR(255) NOT NULL, " +
            "PRIMARY KEY ( " + CODE_COLUMN + "))";
        db.run(sql);
    });
}

CreateDB();

function InsertOrderClause(disCode, age, orderClause, standard)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        let sql = "INSERT INTO " + ORDERS_TABLE + " (" + DISEASE_CODE_COLUMN + ", " +
            AGE_COLUMN + ", " + ORDER_CLAUSE_COLUMN + ", " + STANDARD_COLUMN + ") VALUES(?, ?, ?, ?)";
        db.run(sql, disCode, age, orderClause, standard);
    });
}

function InsertCriteria(orderClause, criteria)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        let sql = "INSERT INTO " + CRITERIA_TABLE + " (" + ORDER_CLAUSE_COLUMN + ", " + CRITERIA_COLUMN + "), " +
        "VALUES(?, ?)";
        db.run(sql, orderClause, criteria);
    });
}

function InsertService(code, name)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        let sql = "INSERT INTO " + SERVICES_LIST_TABLE +
            " (" + CODE_COLUMN + ", " + NAME_COLUMN  + "), " +
            "VALUES(?, ?)";
        db.run(sql, code, name);
    });
}

function InsertMedication(code, name)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        let sql = "INSERT INTO " + MEDICATIONS_LIST_TABLE +
            " (" + CODE_COLUMN + ", " + NAME_COLUMN  + "), " +
            "VALUES(?, ?)";
        db.run(sql, code, name);
    });
}

function InsertServiceAndMedicationList(standard, service, medications)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        let sql = "INSERT INTO " + LIST_TABLE +
            " (" + STANDARD_COLUMN + ", " + SERVICE_COLUMN + ", " + MEDICATIONS_COLUMN + "), " +
            "VALUES(?, ?, ?)";
        db.run(sql, standard, service, medications);
    });
}

function GetStandardAndOrderClause(disCode, age, callback, badcallback)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        db.all("SELECT " + ORDER_CLAUSE_COLUMN + ", " + STANDARD_COLUMN +
            " FROM " + ORDERS_TABLE +
            " WHERE " + DISEASE_CODE_COLUMN + "='" + disCode +
            "' AND " + AGE_COLUMN + "='" + age + "'",
            (err, results) => {
            console.log(err);
            if(!err && results.length === 1)
            {
                callback(results);
            }
            else if (badcallback)
            {
                badcallback();
            }

        });
    });

    db.close();
}

function GetCriteria(orderClause, callback, badcallback)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        db.all("SELECT " + CRITERIA_COLUMN +
            " FROM " + CRITERIA_TABLE +
            " WHERE " + ORDER_CLAUSE_COLUMN + "='" + orderClause + "'",
            (err, results) => {
                console.log(err);
                if(!err && results.length === 1)
                {
                    callback(results);
                }
                else if (badcallback)
                {
                    badcallback();
                }

            });
    });

    db.close();
}

function GetService(code, callback, badcallback)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        db.all("SELECT " + SERVICES_LIST_TABLE +
            " FROM " + NAME_COLUMN +
            " WHERE " + CODE_COLUMN + "='" + code + "'",
            (err, results) => {
                console.log(err);
                if(!err && results.length === 1)
                {
                    callback(results);
                }
                else if (badcallback)
                {
                    badcallback();
                }

            });
    });

    db.close();
}
function GetMedication(code, callback, badcallback)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        db.all("SELECT " + MEDICATIONS_LIST_TABLE +
            " FROM " + NAME_COLUMN +
            " WHERE " + CODE_COLUMN + "='" + code + "'",
            (err, results) => {
                console.log(err);
                if(!err && results.length === 1)
                {
                    callback(results);
                }
                else if (badcallback)
                {
                    badcallback();
                }

            });
    });

    db.close();
}

function GetServiceAndMedicationList(standard, callback, badcallback)
{
    const db = new sqlite3.Database('./databaseName');
    db.serialize(function() {
        db.all("SELECT " + SERVICE_COLUMN + ", " + MEDICATIONS_COLUMN +
            " FROM " + LIST_TABLE +
            " WHERE " + STANDARD_COLUMN + "='" + standard + "'",
            (err, results) => {
                console.log(err);
                if(!err && results.length === 1)
                {
                    callback(results);
                }
                else if (badcallback)
                {
                    badcallback();
                }

            });
    });

    db.close();
}

module.exports = {InsertOrderClause, InsertCriteria, InsertServiceAndMedicationList,
    InsertService, InsertMedication, GetStandardAndOrderClause, GetCriteria,
    GetServiceAndMedicationList, GetService, GetMedication};
