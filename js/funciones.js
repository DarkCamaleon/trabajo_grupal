var myVar = setInterval(myTimer, 1000);

function myTimer() {
    
    var d = new Date();
    var t = d.toLocaleTimeString();
    var f = d.toLocaleDateString();
    document.getElementById("horafecha").innerHTML = f + " " + t;
    
}

alert("Hola bienvenidos a la pagina del grupo 4 la fecha actual " + Date());
   













  




