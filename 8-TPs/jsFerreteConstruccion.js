/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var terrenoRectangular;
	var hilosDeAlambre;
	var cantidadDeAlambre;

	largoDelTerreno=document.getElementById('Largo').value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=document.getElementById('Ancho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	terrenoRectangular=2*(largoDelTerreno+anchoDelTerreno);
	
	hilosDeAlambre=3;

	cantidadDeAlambre=terrenoRectangular*hilosDeAlambre;

	alert("La cantidad de alambre a comprar es de "+cantidadDeAlambre+" metros");

}
function Circulo () 
{
	var radioDelTerreno;
	var terrenoCircular;
	var hilosDeAlambre;
	var cantidadDeAlambre;
	
	radioDelTerreno=document.getElementById('Radio').value;
	radioDelTerreno=parseInt(radioDelTerreno);

	terrenoCircular=2*3.14*radioDelTerreno; //averiguar como poner el numero pi como una variable//

	hilosDeAlambre=3;

	cantidadDeAlambre=terrenoCircular*hilosDeAlambre;

	alert("La cantidad de alambre a comprar es de "+cantidadDeAlambre+" metros");
}
function Materiales () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var terrenoRectangular;
	var bolsasDeCemento;
	var bolsasDeCal;

	largoDelTerreno=document.getElementById('Largo').value;
	largoDelTerreno=parseInt(largoDelTerreno);

	anchoDelTerreno=document.getElementById('Ancho').value;
	anchoDelTerreno=parseInt(anchoDelTerreno);

	terrenoRectangular=largoDelTerreno*anchoDelTerreno;

	bolsasDeCemento=terrenoRectangular*2;

	bolsasDeCal=terrenoRectangular*3;

	alert("Se necesitan "+bolsasDeCemento+" bolsas de cemento y "+bolsasDeCal+" bolsas de cal");


}	
