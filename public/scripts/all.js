function validateForm(){
    var username = document.forms["regForm"]["username"].value;
    var password = document.forms["regForm"]["password"].value;
    var email = document.forms["regForm"]["email"].value;
    var fullname = document.forms["regForm"]["fullname"].value;
    var address = document.forms["regForm"]["address"].value;
    
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    
    if(username == null || username == ""){
        document.getElementById("usernameValidate").innerHTML = "* Please input your username";
        return false;
    };
    
    if(username.length <6){
        document.getElementById("usernameValidate").innerHTML = "* Username should be at least 6 characters";
        return false;
    }
    else {document.getElementById("usernameValidate").innerHTML = ""};
    
    if (password == null || password == ""){
        document.getElementById("passwordValidate").innerHTML = "* Please input your password";
        return false;
    }
    else {document.getElementById("passwordValidate").innerHTML = ""};
   
    if (email == null || email == ""){
        document.getElementById("emailValidate").innerHTML = "* Please input your email";
        return false;
    };
    
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById("emailValidate").innerHTML = "* Email is not valid";
        return false;
    }
    else {document.getElementById("emailValidate").innerHTML = ""};

    if (fullname == null || fullname == ""){
        document.getElementById("fullnameValidate").innerHTML = "* Please input your full name";
        return false;
    }
    else {document.getElementById("fullnameValidate").innerHTML = ""};
    
    if (address == null || address == ""){
        document.getElementById("addressValidate").innerHTML = "* Please input your address";
        return false;
    }
    else {document.getElementById("addressValidate").innerHTML = ""};
}