//pista aca todo esta bien pero revisa esta funcion e intenta explicar que pasa en cada linea de codigo
function subeNivel() {
  nivelActual++;
}
//La funcion comprendida de la línea 2 a la 3 está indicando que para subir de nivel se aplicará un operador aritmético de incremento (++), es decir que al valor designado en nivel actual se le suma 1, es decir, si el nivelActual es 3, sumarle 1 a ese 3, en consecuencia el nivel será 4.
function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}
//La función comprendida de la línea 6 a la 12 está indicando que para ejecutar la funcion actualizaNivel se declara la variable nivelTexto que será igual a la variable nivelActual +1 y que si el valor del nivelTexto es menor a 10 se escriba un cero a la izquierda del número arrojado, por ejemplo: si el nivelTexto es 4 se arrojaría como 04.
//el aparte de document.querySelector("#nivel") solicita que se retorne el primer elemento en el documento que coincida con el selector especificado, es decir, en este caso es "#nivel" para en consecuencia aplicar el ".innerText = nivelTexto;" el cual permite leer el texto del elemento y asignarle el valor del nivelTexto es decir 04 para el ejemplo propuesto.
function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}
