/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
    
	nombre=document.getElementById('elNombre').value;
    
    //el archivo js esta conectado con el archivo html//
	//el Id nos sirve para tomar datos de los cuadros de texto//
	//.value se usa para tomar el valor que ingresamos en el cuadro de texto//

	alert(nombre);
}


