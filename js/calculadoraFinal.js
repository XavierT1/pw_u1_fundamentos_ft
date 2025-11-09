let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
  let elemento = document.getElementById("display");
  elemento.innerText = elemento.innerText + valor;
}

function sumar() {
  let elemento = document.getElementById("display");
  let valores = elemento.innerText.split("+");
  num1 = parseFloat(valores[0]);
  num2 = parseFloat(valores[1]);
  let resultado = num1 + num2;
  elemento.innerText = resultado;
}

function restar() {
  let elemento = document.getElementById("display");
  let valores = elemento.innerText.split("-");
  num1 = parseFloat(valores[0]);
  num2 = parseFloat(valores[1]);
  let resultado = num1 - num2;
  elemento.innerText = resultado;
}

function multiplicar() {
  let elemento = document.getElementById("display");
  let valores = elemento.innerText.split("*");
  num1 = parseFloat(valores[0]);
  num2 = parseFloat(valores[1]);
  let resultado = num1 * num2;
  elemento.innerText = resultado;
}

function dividir() {
  let elemento = document.getElementById("display");
  let valores = elemento.innerText.split("/");
  num1 = parseFloat(valores[0]);
  num2 = parseFloat(valores[1]);
  let resultado = num1 / num2;
  elemento.innerText = resultado;
}

function limpiarDisplay() {
  let elemento = document.getElementById("display");
  elemento.innerText = "";
}

function borrarDigito() {
  let elemento = document.getElementById("display");
  elemento.innerText = elemento.innerText.slice(0, -1);
}

function calcularPorcentaje() {
  let elemento = document.getElementById("display");
  let expresion = elemento.innerText.trim();
  if (expresion === "") return;

  // solo hay un número
  if (/^\d+(\.\d+)?$/.test(expresion)) {
    elemento.innerText = (parseFloat(expresion) / 100).toString();
    return;
  }

  // Operacion con %
  elemento.innerText += "%";
}

function calcularResultado() {
  let elemento = document.getElementById("display");
  let expresion = elemento.innerText.trim();

  if (expresion === "") return;

  try {
    // Si hay más de un %
    if ((expresion.match(/%/g) || []).length > 1) {
      throw "Error";
    }

    // solo número con %
    if (/^\d+(\.\d+)?%$/.test(expresion)) {
      elemento.innerText = parseFloat(expresion) / 100;
      return;
    }

    // operación con porcentaje
    let match = expresion.match(/([\d.]+)\s*([+\-*/])\s*([\d.]+)%/);
    if (match) {
      let base = parseFloat(match[1]);
      let operador = match[2];
      let porcentaje = parseFloat(match[3]);
      let valorPorcentaje = (base * porcentaje) / 100;
      let resultado;

      switch (operador) {
        case "+":
          resultado = base + valorPorcentaje;
          break;
        case "-":
          resultado = base - valorPorcentaje;
          break;
        case "*":
          resultado = base * (porcentaje / 100);
          break;
        case "/":
          resultado = base / (porcentaje / 100);
          break;
        default:
          throw "Error";
      }

      elemento.innerText = resultado;
      return;
    }

    // Si no hay % evaluar normalmente
    let resultado = eval(expresion);
    elemento.innerText = resultado;
  } catch (e) {
    elemento.innerText = "Error";
  }
}
