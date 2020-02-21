function mostrar()
{

	var contador; 	
	var acumulador;
	var numeroIngresado; 

	contador=0;
	acumulador=0;

	while (contador<5) 
	{		
		contador=contador+1;

		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) 
		{
			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
		}

		acumulador=acumulador+numeroIngresado;
	}	




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN