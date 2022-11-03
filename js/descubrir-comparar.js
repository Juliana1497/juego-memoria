function descubrir() {
  var descubiertas;
  var tarjetasPendientes;
  var totalDescubiertas = document.querySelectorAll(
    ".descubierta:not(.acertada)"
  );

  if (totalDescubiertas.length > 1) {
    return;
  }
  //Averigua para que sirve el metodo THIS
  //this es una referencia que se crea cuando una función es invocada, no declarada. El valor de esa referencia depende al 100% del lugar en la que esa invocación se realice, llamado call-site.Ese lugar de llamada es la invocación en sí a la función. Es decir, el momento justo en que es llamada (no declarada, no referenciada) esa función. 
  this.classList.add("descubierta");
  document.querySelector("#sonido-carta").cloneNode().play();

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) {
    return;
  }
  //pista aca falta ubicar la palabra descubiertas para invicar la funcion de las cartas
  comparar(descubiertas);
  actualizaContador();
  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(tarjetasAComparar) {
  if (
    tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor
  ) {
    acierto(tarjetasAComparar);
  } else {
    error(tarjetasAComparar);
  }
}
