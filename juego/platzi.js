var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
	url: "tile.png",
	cargaOk:false
}

var vaca = {
	url:"vaca.png",
	cargaOk: false
};


var cantidad = aleatorio(0,40);
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

function cargarFondo()
{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas()
{
	vaca.cargaOK = true;
	dibujar();
}

function dibujar()
{
	
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.objeto, 0,0);
	}
	if(vaca.cargaOK)
	{
		console.log(cantidad);
		for(var v=0; v < cantidad; v++)
		{
		var x = aleatorio(0,7);
		var y = aleatorio(0,7);
		var x = x * 60;
		var y = y * 60;
		papel.drawImage(vaca.objeto, x,y);
		}
	
	}

}


function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random()* (maxi - min + 1)) +min;
	return resultado;

}