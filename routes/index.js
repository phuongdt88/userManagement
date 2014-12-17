var express = require('express');
var router = express.Router();
var users = require('../models/login');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


/*GET register page */

router.get('/register', function(req, res){
    res.render('register', {
        title: 'Register page'
    });
});

router.post('/regAct', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var fullname = req.body.fullname;
    var dateofbirth = req.body.month + '-' + req.body.day + '-' + req.body.year;
    var gender = req.body.gender;
    var address = req.body.address;
    users.checkExist(username, function(result){
        if(result.rowCount == 0){
            users.register(username, password, email, fullname, dateofbirth, gender, address);
            users.getUserIDbyUsername(username, function(result){
            var userID = result.rows[0].userID;
            res.redirect('./profile/'+userID);
        });
        }
        else{
            res.redirect('./register');
            console.log('username existed');
        }
    });
        
});

router.get('/profile/:userID', function(req, res){
    var userID = req.params.userID;
    users.getProfilebyUserID(userID, function(result){
            res.render('profile', {
            title: 'User Profile Page',
            data: result.rows[0]
        });
    });
    
});

router.get('/login', function(req, res){
    res.render('login', {
        title: 'Login Page'
    });
});

router.post('/loginAct', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    users.login(username, password, function(result){
        if(result.rowCount == 0){
            res.redirect('./login');
        }
        else {
            users.getUserIDbyUsername(username, function(resutl){
                var userID = result.rows[0].userID;
                res.redirect('./profile/'+userID);
            });
        }
    });
});

module.exports = router;
