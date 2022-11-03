//pista aca averigua para que sierve el metodo Marh
//1. Compara una cadena con una expresión regular 
//2. Devuelve una matriz con las coincidencias 
//3. Devuelve nulo si no se encuentra ninguna coincidencia. 
function barajaTarjetas(lasTarjetas) {
  var resultado;
  var totalTarjetas = lasTarjetas.concat(lasTarjetas);
  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });

  //pista por aca falta un return (Que regresa la función)
  return resultado;
}

function reparteTarjetas(lasTarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas(lasTarjetas);
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta' data-valor= " +
      elemento +
      ">" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}
