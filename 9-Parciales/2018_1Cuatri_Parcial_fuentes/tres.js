function mostrar()
{
	var ingreso;
	var porcentaje;
	var precioFinal;
	var descuento;

	ingreso=prompt("Ingrese un numero");
	ingreso=parseInt(ingreso);

	porcentaje=prompt("Ingrese el porcentaje a calcular");
	porcentaje=parseInt(porcentaje);

	descuento=ingreso*porcentaje/100;
	
	precioFinal=document.getElementById('elPrecioFinal').value=descuento+ingreso;
	console.log(precioFinal);
}
