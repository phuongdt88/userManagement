function validateForm(){
    var username = document.forms["regForm"]["username"].value;
    var password = document.forms["regForm"]["password"].value;
    var email = document.forms["regForm"]["email"].value;
    var fullname = document.forms["regForm"]["fullname"].value;
    var address = document.forms["regForm"]["address"].value;
    
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    
    document.getElementById("usernameValidate").style.color = "red";
    document.getElementById("passwordValidate").style.color = "red";
    document.getElementById("emailValidate").style.color = "red";
    document.getElementById("fullnameValidate").style.color = "red";
    document.getElementById("addressValidate").style.color = "red";
    //document.getElementsByTagName('div').style.color = "red";
    
    if(username == null || username == ""){
        document.getElementById("usernameValidate").innerHTML = "* Please input your username";
        document.getElementById("username").style.border = "red 1px solid";
        
        return false;
    };
    
    if(username.length <6){
        document.getElementById("usernameValidate").innerHTML = "* Username should be at least 6 characters";
        document.getElementById("username").style.border = "red 1px solid";
        return false;
    }
    else {document.getElementById("usernameValidate").innerHTML = ""};
    
    if (password == null || password == ""){
        document.getElementById("passwordValidate").innerHTML = "* Please input your password";
        document.getElementById("password").style.border = "red 1px solid";
        return false;
    };
    if (password.length<6){
        document.getElementById("passwordValidate").innerHTML = "* Password should be at least 6 characters";
        document.getElementById("password").style.border = "red 1px solid";
        return false;
    }
    else {document.getElementById("passwordValidate").innerHTML = ""};
   
    if (email == null || email == ""){
        document.getElementById("emailValidate").innerHTML = "* Please input your email";
        document.getElementById("email").style.border = "red 1px solid";
        return false;
    };
    
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        document.getElementById("emailValidate").innerHTML = "* Email is not valid";
        document.getElementById("email").style.border = "red 1px solid";
        return false;
    }
    else {document.getElementById("emailValidate").innerHTML = ""};

    if (fullname == null || fullname == ""){
        document.getElementById("fullnameValidate").innerHTML = "* Please input your full name";
        document.getElementById("fullname").style.border = "red 1px solid";
        return false;
    }
    else {document.getElementById("fullnameValidate").innerHTML = ""};
    
    if (address == null || address == ""){
        document.getElementById("addressValidate").innerHTML = "* Please input your address";
        document.getElementById("address").style.border = "red 1px solid";
        return false;
    }
    else {document.getElementById("addressValidate").innerHTML = ""};
}


// Upload script 
    
    function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);

// End Upload script 