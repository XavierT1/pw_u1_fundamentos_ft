document.getElementById("paymentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    validarCampos();
});

function validarCampos() {
    limpiarMensajes();

    let cardholder = document.getElementById("cardholder").value.trim();
    let cardnumber = document.getElementById("cardnumber").value.trim();
    let exp = document.getElementById("exp").value.trim();
    let cvv = document.getElementById("cvv").value.trim();


    if (cardholder === "") {
        mostrarMensaje("El nombre del titular está vacío");
        mostrarAsterisco("id_error_cardholder");
        return;    
    }
    if (cardnumber === "") {
        mostrarMensaje("El número de tarjeta está vacío");
        mostrarAsterisco("id_error_cardnumber");
        return;    
    }
    if (cardnumber.length < 16) {
        mostrarMensaje("El número de tarjeta es inválido");
        mostrarAsterisco("id_error_cardnumber");
        return;    
    }
    const expRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (exp ===""){
        mostrarMensaje("La fecha de expiración está vacía");
        mostrarAsterisco("id_error_exp");
        return;    
    }
    if (!expRegex.test(exp)) {
        mostrarMensaje("La fecha de expiración es inválida");
        mostrarAsterisco("id_error_exp");
        return;    
    }
    if (cvv === "") {
        mostrarMensaje("El CVV está vacío");
        mostrarAsterisco("id_error_cvv");
        return;    
    }
    if (cvv.length !== 3) {
        mostrarMensaje("El CVV es inválido");
        mostrarAsterisco("id_error_cvv");
        return;    
    }
    mostrarMensaje("Formulario enviado correctamente");

}
function mostrarMensaje(mensaje) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = mensaje;
    mensaje.style.display = "block";
}
function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = "*";
}
function limpiarMensajes() {
    let msg = document.getElementById("id_msg_error");
    msg.innerText = "";
    msg.style.display = "none";

    let errores = document.querySelectorAll(".error_asterisco");
    errores.forEach(e => e.innerText = "");
}