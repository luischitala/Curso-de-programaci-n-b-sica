var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
dibujarLinea("pink",10,300,220,10);
dibujarLinea("yellow",300,10,10,220);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, xfinal);
	lienzo.lineTo(yinicial, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}