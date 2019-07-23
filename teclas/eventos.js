var teclas = 
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
	
	switch(evento.keyCode)
	{
		case teclas.UP:
			console.log("ARRIBA");
		break;

		case teclas.DOWN:
			console.log("ABAJO");
		break;
		
		case teclas.LEFT:
			console.log("IZQUIERDA");
		break;

		case teclas.RIGHT:
			console.log("DERECHA");
		break;
	}

}