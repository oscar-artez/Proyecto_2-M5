
//DATOS//
const cuentas = [
     { "nombre": 'Hiromi', "saldo": 200, "password": 'helloworld' },
     { "nombre": 'Manuel', "saldo": 290, "password": 'l33t' },
     { "nombre": 'Luis', "saldo": 67, "password": '123' }
   ];


  function validacion(){
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    for ( let i=0; i < cuentas.length; i++){
      let element = cuentas [i];
      if (element.nombre === usuario && element.password === contraseña){
       return true;
    }  
   }
  }
      if (validacion () == true){
         alert("Credenciales incorrectas");
         }
       else
       window.location.href="menu.html";