var config = require('./postgresConfig');
var pg = config.pg;
var conString = config.conString;

function users(){
    "use strict";
};

users.register = function(username, password, email, fullname, dateofbirth, gender, address){
    pg.connect(conString, function(err, client, done){
        var queryStr = 'INSERT INTO profile(email, fullname, dateofbirth, gender, address) VALUES (\'' + email + '\',\'' + fullname + '\',\'' + dateofbirth + '\',\'' + gender + '\',\'' + address + '\'); INSERT INTO login(username, password) VALUES(\'' + username + '\',\'' + password + '\')';
        console.log(queryStr);
        client.query(queryStr, function(err){
            done();
        });
    });
};

users.getUserIDbyUsername = function(username, callback){
    pg.connect(conString, function(err, client, done){
        var queryStr = 'SELECT * FROM login WHERE username = \'' + username + '\'';
        console.log(queryStr);
        client.query(queryStr, function(err, result){
            done();
            callback(result);
        });
    });
};

users.getProfilebyUserID = function(userID, callback){
    pg.connect(conString, function(err, client, done){
        var queryStr = 'SELECT * FROM profile WHERE \"userID\" = \'' + userID + '\'';
        console.log(queryStr);
        client.query(queryStr, function(err, result){
            done();
            callback(result);
        });
    });
};

users.login = function(username, password, callback){
    pg.connect(conString, function(err, client, done){
        var queryStr = 'SELECT * FROM login WHERE username = \'' + username + '\' AND password = \'' + password + '\'';
        console.log(queryStr);
        client.query(queryStr, function(err, result){
            done();
            callback(result);
        });
    });
};

users.checkExist = function(username, callback){
    pg.connect(conString, function (err, client, done){
        var queryStr = 'SELECT * FROM login WHERE username = \'' + username + '\'';
        console.log(queryStr);
        client.query(queryStr, function(err, result){
            done();
            callback(result);
        });
    });
};

module.exports = users; 