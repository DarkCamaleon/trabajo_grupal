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
 


        $("#form1").validate({
          rules: 
          {
            nombre: 
            {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            telefono: 
            {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            email: 
            {
                required: true,
                minlength: 3,
                maxlength: 20,
            },
            comentario: 
            {
                required: true,
                minlength: 3,
                maxlength: 20,
            }
          },
      
          messages:{
            nombre: {
              required: "Debe Ingresar el Nombre",
              minlength: "El nombre debe contener al menos 3 caracteres",
              maxlength: "El nombre debe contener al menos 20 caracteres",
            },
            telefono: {
              required: "Debe Ingresar el Telefono",
              minlength: "El telefono debe contener al menos 3 caracteres",
              maxlength: "El telefono debe contener al menos 20 caracteres",
            },
            email: {
              required: "Debe Ingresar el Email",
              minlength: "El email debe contener al menos 3 caracteres",
              maxlength: "El email debe contener al menos 20 caracteres",
            },
            comentario: {
              required: "Debe Ingresar el Comentario",
              minlength: "El comentario debe contener al menos 3 caracteres",
              maxlength: "El comentario debe contener al menos 20 caracteres",
            }
          },
          submitHandler: function(form) 
          {
            form.submit();
          }
        });
     




// alert("Hola bienvenidos a la pagina del grupo 4 la fecha actual " + Date());
   

















