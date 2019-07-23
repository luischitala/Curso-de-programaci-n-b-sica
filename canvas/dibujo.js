var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";
var texto = document.getElementById("texto");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);


for(l=0; l < lineas; l++)
{
	yi = 10 * l;
	xf = 10 * (l+1);
	dibujarLinea(colorcito,0,yi,xf,300);
	console.log("Linea" + 1);
}

dibujarLinea(colorcito, 1,1,1,300);
dibujarLinea(colorcito, 1,299,299,299);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(yinicial, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick()

{

	alert("No me toques ahí");
}