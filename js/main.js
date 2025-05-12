function login(){
    var user,pass;
    user = document.getElementById("usuario").value;
    pass = document.getElementById("clave").value;
    console.log(user);
    console.log(pass);
    if (user =="Jhonny" && pass =="123"){

        window.location = "principal.html";
        
    }
}