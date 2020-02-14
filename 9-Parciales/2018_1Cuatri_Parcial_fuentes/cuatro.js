function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese el primer numero");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese el segundo numero");
	numeroDos=parseInt(numeroDos);

	resta=numeroUno-numeroDos;

	suma=numeroUno+numeroDos;

	if (numeroUno>numeroDos) {
		alert(resta);
	}else if (suma>10) {
		alert("La suma es "+suma+" y supera el 10");
	}else if(numeroUno<numeroDos) {
		alert(suma);
	}else {
		alert(suma)
	}
}

