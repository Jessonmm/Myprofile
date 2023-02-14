function Validate(){
console.log("FORM");
var nameError=document.getElementById('name').value;
var emailError=document.getElementById('email').value;
var mobileError=document.getElementById('mobile').value;
var messageError=document.getElementById('message').value;



var error=document.getElementById('err');

if(nameError==""){
    error.innerHTML='Enter a name';
    return false;
}if(emailError==""){
    error.innerHTML='Enter a email';
    return false;
}if(mobileError==""){
    error.innerHTML='Enter the message';
    return false;
}if(messageError==""){
    error.innerHTML='Enter the message'
}
error.innerHTML('valid');
return true;
}