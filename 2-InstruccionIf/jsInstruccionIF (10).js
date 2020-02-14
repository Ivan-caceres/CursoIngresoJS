function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notas;

	notas=Math.floor(Math.random() *11);
	notas=parseInt(notas);

	if (notas<4) {
		alert("Vamos, la proxima se puede");
	}else if (notas>=4&&notas<9) {
		alert("APROBO");
	}else {
		alert("EXELENTE");
	}	

}//FIN DE LA FUNCIÓN