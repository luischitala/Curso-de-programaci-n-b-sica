
document.addEventListener("keydown", mover)
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";
var xP = 200;
var yP = 350;

var flechas =
    {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    }

var fondo = {
	url: "tile.png",
	cargaOk:false
}

var vaca = {
	url:"vaca.png",
	cargaOk: false
}

var cerdo = {
	url:"cerdo.png",
	cargaOk: false
};


var cantidad = aleatorio(0,40);
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load",cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

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
function cargarCerdos()
{
	cerdo.cargaOK = true;
	dibujar();
}
function dibujarCerdo()
{
	papel.drawImage(cerdo.objeto, xP,yP);
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
	if(cerdo.cargaOK)
		{
		dibujarCerdo()
		}
		
	}
	}

function mover (teclaOprimida)
    {
        switch (teclaOprimida.keyCode)
            {
                case flechas.UP:
                yP--;

             	papel.drawImage(fondo.objeto, 0,0);
                dibujarCerdo();
                break;
                    
                case flechas.DOWN:
                yP++;
                papel.drawImage(fondo.objeto, 0,0);
                dibujarCerdo();
                break;
                
                case flechas.RIGHT:
                xP++;
                papel.drawImage(fondo.objeto, 0,0);
                dibujarCerdo();
                break;
                    
                case flechas.LEFT:
                xP--;
                papel.drawImage(fondo.objeto, 0,0);
                dibujarCerdo();
                break;    
            }
}

function aleatorio(min, maxi)
{
	var resultado;
	resultado = Math.floor(Math.random()* (maxi - min + 1)) +min;
	return resultado;

}