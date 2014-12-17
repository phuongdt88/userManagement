var pg = require('pg');
var postgresDB = {
    host: 'localhost',
    username: 'postgres',
    password: '123456', 
    database: 'userManagement',
    port: '5432'
};

function pgdb(){
    "use strict";
};

pgdb.conString = "postgres://" + postgresDB.username + ":" + postgresDB.password + "@" + postgresDB.host + ":" + postgresDB.port + "/" + postgresDB.database;

pgdb.pg = pg;

module.exports = pgdb;  

