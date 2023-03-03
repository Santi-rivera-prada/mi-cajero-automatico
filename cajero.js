
//const , var ...

const nombre = 'mali'; pass = 'mali1234'; saldo = '1000'; 
const nombre1 = 'gera'; pass1 = 'gera1234'; saldo1 = '8000';    
const nombre2 = 'maui'; pass2 = 'maui1234'; saldo2 = '2000';


//1.funcion de inicio de seccion 

function IniciarSeccion(form){ 
   
    if (form.u.value== nombre) {
    if (form.c.value== pass) {
        alert('welcome ' + nombre)
    location="ATM.html";
    } else {
        alert('usuario o contraseña incorrecta'),
        alert('intente nuevamente')
    }
}  


    if (form.u.value== nombre1) {
        if (form.c.value== pass1) {
            alert('welcome '+ nombre1)
        location="atmG.html";
        }else {
            alert('usuario o contraseña incorrecta'),
            alert('intente nuevamente')
        
        }
}

       
    if (form.u.value== nombre2) {
        if (form.c.value== pass2) {
            alert('welcome '+ nombre2)
        location="atmM.html";
        } else {
            alert('usuario o contraseña incorrecta'),
            alert('intente nuevamente')    
        
        }
     
 }

 
}
//terminada





//2.funciones de saldo de mali gera y maui saldo y deposito


function verificarSaldo(form){

   if (form.v.value== nombre){
       if(form.p.value== pass){
           alert('tu saldo es ' + saldo)
       }else(
           alert('credenciales incorrectas')
       )
}else(
    alert('credenciales incorrectas')
)
}

function verificarSaldo1(form){

   if (form.v.value== nombre1){
       if(form.p.value== pass1){
           alert('tu saldo es ' + saldo1)
       }else(
           alert('credenciales incorrectas')
       )
     
}else(
    alert('credenciales incorrectas')
)
}

function verificarSaldo2(form){

   if (form.v.value== nombre2){
       if(form.p.value== pass2){
           alert('tu saldo es ' + saldo2)
       }else(
           alert('credenciales incorrectas')
       )

}else(
    alert('credenciales incorrectas')
)
}
//terminado






//3.funciones de deposito

function depositarDinero(){


    const depositar = Number(prompt('cuanto vas a depositar'));

      if(Number(depositar)){
       if ( depositar <= 20000){
        alert('Ingresaste $'+depositar+' COP'+'. Tu nuevo saldo es de: $'+ (verificarSaldo + depositar) + 'COP')
      }else{
        alert('Por favor intenta de nuevo. Tu saldo no puede ser mayor a $20000 COP')
    }
    }else{    
    alert('Por favor ingresa un número válido.');
    }
     
}

 




















/*



  //funciones de retiros

  
function retirarDinero(){

    var retirar = Number(prompt('cuanto vas a retirar'));

    if(number(retirar)){
        if ((saldo - retirar >= 100))  {
            alert('Retiraste $'+retirar+'.00 COP'+'. Tu nuevo saldo es de: $'+(nombre.saldo - retiro)+'.00 COP')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser menos a $100.00 COP')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((retirar + nombre[0].saldo) <= 200) {
        (nombre.saldo) -= retiro
    }
    }










/*

// A. Userpage Mali()
function ingresarMontoMali() {
    var monto = Number(prompt('¿Qué monto deseas ingresar?'))
    if (Number(monto)) {
        if((monto + cuentas[0].saldo) <= 990) {
            alert('Ingresaste $'+monto+'.00 MXN'+'. Tu nuevo saldo es de: $'+ (monto + cuentas[0].saldo)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser mayor a $990.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((monto + cuentas[0].saldo) <= 990) {
        (cuentas[0].saldo) += monto
    }
}

function retirarMontoMali() {
    var retiro = Number(prompt('¿Qué monto deseas retirar?'))
    if (Number(retiro)) {
        if ((cuentas[0].saldo - retiro <= 10)) {
            alert('Retiraste $'+retiro+'.00 MXN'+'. Tu nuevo saldo es de: $'+(cuentas[0].saldo - retiro)+'.00 MXN')
        }else{
            alert('Por favor intenta de nuevo. Tu saldo no puede ser menos a $10.00 MXN')
        }
    }else{    
        alert('Por favor ingresa un número válido.');
    }
    if((retiro + cuentas[0].saldo) <= 990) {
        (cuentas[0].saldo) -= retiro
    }
}    





/*
function depositarDinero() {
  
   var deposito = (prompt('¿Qué monto deseas ingresar?'));

   if((deposito + saldo) <= 999999) {
       alert('Ingresaste $'+deposito+' COP'+'. Tu nuevo saldo es de: $'+ (deposito + nombre  + saldo)+' COP')
   }else{
       alert('Por favor intenta de nuevo. Tu saldo no puede ser mayor a $999.999 COP')
   }   
       alert('Por favor ingresa un número válido.');

   if((deposito + saldo) <= 999999) {
       (nombre + saldo) += deposito
   }
   
}  






/*

function verificarSaldo(form){

   if (value =saldo ){
      if (form.value && nombre == saldo)
       alert('tu saldo: ' + saldo + ' COP');
   }
   

   if (value = saldo1){
       if (form.value = saldo1)
        alert('tu saldo: ' + saldo1 + ' COP');
    }

    if (value = saldo2){
       if (form.value = saldo2)
        alert('tu saldo: ' + saldo2 + ' COP');
    }




function VerificarSaldo()
{



   for(var v of o)
   {
       saldo = saldo + v.valor * v.cantidad;
       total = saldo;
       resultado.innerHTML = "Su saldo actual es: " + saldo + "<hr />";
   }
}



function saldo()
{

   const saldo1 = '800.000';    
   const saldo2 = '200.000';

   const saldo = 1000000;
   for()
}




function saldo()
{
   const saldo = '1.000.000';   
   const saldo1 = '800.000';    
   const saldo2 = '200.000';

   var monto = 0;
   for(var v of caja)
   {
       saldo = saldo + v.valor * v.cantidad;
       total = saldo;
       resultado.innerHTML = "Su saldo actual es: " saldo. + "<hr />";
   }
}





function contar()
{
   total = 0
   for (var tot of caja)
   {
       total = total + tot.valor * tot.cantidad;
   }
   console.log(total);
}


*/
