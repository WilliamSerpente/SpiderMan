function enviarMensaje() {
    
    let validarCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let nombre = document.getElementById("nombreID").value;
    let correo = document.getElementById("correoID").value;
    let mensaje = document.getElementById("mensajeID").value;
    let vacio = false;

    if(nombre == ""){
        alert("Rellena el campo de nombre");
        document.getElementById("nombreID").style.borderColor = "red" ;
        vacio = true;
    }
    else{
        document.getElementById("nombreID").style.borderColor = "black" ;
    }
    if(correo == ""){
        
        alert("Rellena el campo de correo");
        document.getElementById("correoID").style.borderColor = "red";
        vacio = true;
    }
    else{
        if (correo.match(validarCorreo)) {
        document.getElementById("correoID").style.borderColor = "black" ;
        }
        else{
        alert("Introduce un correo válido");
        document.getElementById("correoID").style.borderColor = "red";
        vacio = true;
        }
    }
    if(mensaje == ""){
        alert("Rellena el campo de mensaje");
        document.getElementById("mensajeID").style.borderColor = "red";
        vacio = true;
    }
    else{
        document.getElementById("mensajeID").style.borderColor = "black" ;
    }

    if(vacio == false){
    
        console.log("Tu nombre es: " + nombre);
        console.log("Tu corrreo es: " + correo);
        console.log("Tu mensaje es: " + mensaje);
        alert(`Muchas gracias por tu mensaje ${nombre}! Enviaremos una respuesta en breves a ${correo}.`);
    
        document.getElementById("mensajeID").value = "";
        document.getElementById("nombreID").value = "";
        document.getElementById("correoID").value = "";
    }
}