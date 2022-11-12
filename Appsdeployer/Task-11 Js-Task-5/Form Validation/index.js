var userError = document.getElementById('UserError');
var phoneError = document.getElementById('PhoneError');
var emailError = document.getElementById('EmailError');
var passError = document.getElementById('PassError');
var cpassError = document.getElementById('CPassError');

function NameValidation(){
    var Name = document.getElementById('username').value;
    if(Name.length === 0){
        userError.innerHTML = "Here must be a Username!";
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    return true;
}
function ValidatePhone(){
    var Phone = document.getElementById('phone').value;
    if(Phone.length == 0){
        phoneError.innerHTML = "Here must be a number!";
        return false;
    }
    if(Phone.length !== 10){
        phoneError.innerHTML = "Phone number must be of 10 digits!";
        return false;
    }
    if(!Phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Must be a Number!!";
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    return true;
}

function ValidateEmail(){
    var Email = document.getElementById('email').value;
    if(Email.length == 0){
        emailError.innerHTML = 'Here must be an Email!';
        return false;
    }
    if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Enter a Valid Email!";
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    return true;
}

function ValidatePassword(){
    var Pass = document.getElementById('pass').value;
    if(Pass.length == 0){
        passError.innerHTML = "Password Cannot be empty!";
        return false;
    }
    passError.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    return true;
}

function ValidateCPassword(){
    var Pass = document.getElementById('pass').value;
    var CPass = document.getElementById('cpass').value;
    if(CPass.length == 0){
        cpassError.innerHTML = 'Password Cannot be empty!';
        return false;
    }
    if(Pass !== CPass){
        cpassError.innerHTML = "Password does not matches!";
        return false;
    }
    cpassError.innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>';
    return true;
}

function FormValidation(){
    if(!NameValidation() || !ValidatePhone() || !ValidateEmail() || !ValidatePassword() || !ValidateCPassword()){
        alert("Kindky fill the required fields!!");
        return false;
    }
    alert("Thanks for your valuable time!");
    return true;
}