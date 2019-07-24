var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";


var Pokacho = new Pakiman("Pokacho",100,30);
var Cauchin = new Pakiman("Cauchin",80,50);
var Tocinauro = new Pakiman("Tocinauro",120,40);


var coleccion = [];
coleccion.push(Cauchin);
coleccion.push(Pokacho);
coleccion.push(Tocinauro);

Pokacho.mostrar();
Cauchin.mostrar();
Tocinauro.mostrar();
