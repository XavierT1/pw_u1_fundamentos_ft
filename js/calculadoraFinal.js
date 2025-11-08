let num1 = 0;
let num2 = 0;

function mostrarDisplay(valor) {
    let elemento =document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}
function sumar() {
   
}

function restar() {
    
}

function multiplicar() {
    
}

function dividir() {
   
}   
function calcularPorcentaje() {
    
}
function limpiarDisplay() {
   let elemento = document.getElementById('display');
   elemento.innerText = '';
}
function borrarDigito() {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText.slice(0, -1);
}