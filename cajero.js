
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


//MALI

var saldo = 1000;
 
	function showContent(id,e) {
		document.getElementById("error").style.display='none';
 
		if (e.checked) {
			document.getElementById(id).style.display='block';
		}else{
			document.getElementById(id).style.display='none';
		}
	}
 
	function deposito() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor1")[0].value);
		if(!isNaN(valor))
		{
			saldo=saldo+valor;
			document.getElementById("saldo").innerHTML=saldo;
		}
	}
 
	function retiro() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor2")[0].value);
		if(!isNaN(valor))
		{
			if(valor<=saldo)
			{
				saldo=saldo-valor;
				document.getElementById("saldo").innerHTML=saldo;
			}else{
				document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
				document.getElementById("error").style.display='block';
			}
		}
	}
 
	//GERA
    
var saldo = 8000;
 
function showContent1(id,e) {
    document.getElementById("error").style.display='none';

    if (e.checked) {
        document.getElementById(id).style.display='block';
    }else{
        document.getElementById(id).style.display='none';
    }
}

function deposito1() {
    document.getElementById("error").style.display='none';

    var valor=parseInt(document.getElementsByName("valor1")[0].value);
    if(!isNaN(valor))
    {
        saldo=saldo+valor;
        document.getElementById("saldo").innerHTML=saldo;
    }
}

function retiro1() {
    document.getElementById("error").style.display='none';

    var valor=parseInt(document.getElementsByName("valor2")[0].value);
    if(!isNaN(valor))
    {
        if(valor<=saldo)
        {
            saldo=saldo-valor;
            document.getElementById("saldo").innerHTML=saldo;
        }else{
            document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
            document.getElementById("error").style.display='block';
        }
    }
}

//MAUI

var saldo = 2000;
 
	function showContent2(id,e) {
		document.getElementById("error").style.display='none';
 
		if (e.checked) {
			document.getElementById(id).style.display='block';
		}else{
			document.getElementById(id).style.display='none';
		}
	}
 
	function deposito2() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor1")[0].value);
		if(!isNaN(valor))
		{
			saldo=saldo+valor;
			document.getElementById("saldo").innerHTML=saldo;
		}
	}
 
	function retiro2() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor2")[0].value);
		if(!isNaN(valor))
		{
			if(valor<=saldo)
			{
				saldo=saldo-valor;
				document.getElementById("saldo").innerHTML=saldo;
			}else{
				document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
				document.getElementById("error").style.display='block';
			}
		}
	}
 