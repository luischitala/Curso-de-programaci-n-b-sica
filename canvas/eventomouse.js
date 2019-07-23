var teclas = {
  LEFT:37,
  UP:38,
  RIGTH:39,
  DOWN:40
};

document.addEventListener("keyup", dibujarTeclado);
document.addEventListener("mousedown",inicio);
document.addEventListener("mousemove",dibujarMouse);
document.addEventListener("mouseup",fin);

var cuadrito = document.getElementById('area_de_dibujo');
var papel =cuadrito.getContext("2d");
var x = 150;
var y = 150;
var xint;
var yint;
var xfin;
var yfin;
var dibujarConMouse;

function inicio(evento) {
  xint = (evento.layerX);
  yint = (evento.layerY);
  dibujarConMouse = true;
}

function dibujarMouse(evento) {
if (dibujarConMouse) {
  xfin = evento.layerX;
  yfin = evento.layerY;
  evento.clientY
  dibujarLinea("gray",xint,yint,xfin,yfin,papel);
  xint = (evento.layerX);
  yint = (evento.layerY);
}
}

function fin() {
 dibujarConMouse=false;
}

dibujarLinea("gray",149,149,151,151,papel);

function dibujarLinea(color,xinicial,yinicial,xfinal,yfinal,lienzo) {

  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();

}

function dibujarTeclado(evento) {
  var colorcito = "pink"
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x, y-movimiento,papel);
      y = y-movimiento;
      break;
    case teclas.DOWN:
    dibujarLinea(colorcito,x,y,x, y+movimiento,papel);
    y = y+movimiento;

      break;
    case teclas.RIGTH:
    dibujarLinea(colorcito,x,y,x + movimiento,y,papel);
    x = x+movimiento;

      break;
    case teclas.LEFT:
    dibujarLinea(colorcito,x,y,x - movimiento,y,papel);
    x = x - movimiento;

        break;
      default:
      console.log("otra tecla");
      break;

  }
}