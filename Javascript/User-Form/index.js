const showPass = document.getElementById("showPass");
const Password = document.getElementById("Password");

showPass.addEventListener("click", function(){
    if(Password.type == "password"){
        Password.type = "text";
    } else {
        Password.type = "password";  
    }
})