function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while (respuesta=="si") 
		{					
			contador=contador+1;

			numeroIngresado=prompt("Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado);
			while(isNaN(numeroIngresado)) 
			{
				numeroIngresado=prompt("Ingrese un numero");
				numeroIngresado=parseInt(numeroIngresado);
			}

			if (numeroIngresado>0) 
			{
				positivo=numeroIngresado+positivo;
			}
			else
			{
				if (numeroIngresado<0) 
				{
					negativo=numeroIngresado*negativo;
				}

			}
			
			respuesta=prompt("Ingrese si para continuar");
		}	


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN