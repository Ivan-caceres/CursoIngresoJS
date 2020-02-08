/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	alert(suma);

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;
	var cantidadDePrecios;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	cantidadDePrecios=3;

	promedio=suma/cantidadDePrecios;

	alert(promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var porcentaje;
	var iva;
	var precioFinal;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);

	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);

	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;

	porcentaje=21;

	iva=suma*porcentaje/100;

	precioFinal=suma+iva;

	alert(precioFinal);

}