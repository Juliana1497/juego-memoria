function iniciaCronometro() {
  var segundos = 60;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;
  //Determinar el tiempo en segundo para poder tener un mejor contador recuerda no pasar de 60segundos
  function actualizaContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 60;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  cronometro = setInterval(actualizaContador, 1000);
}
