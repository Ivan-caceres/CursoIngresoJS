/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=document.getElementById('numeroUno').value;
	console.log(primerNumero);
	/*si dejamos el codigo de esta manera
	 nos va a reconocer el valor en forma de palabra y no de numero
	para "transformalo" en numero utilizamos el codigo parseInt()*/
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('numeroDos').value;
	console.log(segundoNumero);
	
	segundoNumero=parseInt(segundoNumero);

	suma= (primerNumero+segundoNumero);
	//los () no son necesarios//

	alert(suma);
}

