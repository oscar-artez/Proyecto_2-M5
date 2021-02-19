
//DATOS//
const cuentas = [
     { "nombre": 'Hiromi', "saldo": 200, "password": 'helloworld' },
     { "nombre": 'Manuel', "saldo": 290, "password": 'l33t' },
     { "nombre": 'Luis', "saldo": 67, "password": '123' }
   ];

   let usuarioValido = false;

  function validacion(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    for ( let i=0; i < cuentas.length; i++){
      let element = cuentas [i];
      if (element.nombre === usuario && element.password === contraseña){
        usuarioValido= true;
        window.location.href="menu.html";
    }  
   }
  }
       