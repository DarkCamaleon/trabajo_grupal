var myVar = setInterval(myTimer, 1000);
//1000 milisegundos es un segundo

function myTimer() 
{
    
    var d = new Date();
    
    var t = d.toLocaleTimeString();
    
    var f = d.toLocaleDateString();
    
    document.getElementById("horafecha").innerHTML = f + " " + t;

}

// alert("Hola bienvenidos a la pagina del grupo 4 la fecha actual " + Date());



function validar(){
    var nombre = document.getElementById('nombre');
    if (nombre.value==""){
        alert("el nombre esta vacio");
    }
    var telefono = document.getElementById('telefono');
    if (telefono.value==""){
        alert("el telefono esta vacio")
    }
    var email = document.getElementById('email');
    if (email.value==""){
        alert("email esta vacio")
    }

}



alert("Hola bienvenidos a la pagina del grupo 4 la fecha actual " + Date());
   

















