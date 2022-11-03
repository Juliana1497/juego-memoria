//completa el codigo 
function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    //pista aca falta llamar la función
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();
}
  //pista aca falta crear  la función :(
 function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();
  //averigua para que sirve el metodo remove
  //El metodo remove elimina el elemento, sin importar el nivel al que se encuentre.
  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
