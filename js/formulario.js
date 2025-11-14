function guardar() {
    validarCampos();
}
 
function validarCampos() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let fecha = document.getElementById('fecha').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
 
 
    if (nombre === "") {
        mostrarMensaje('Nombre esta vacio');
        mostrarAsterisco('id-error-nombre');
        return;
    }
 
    if (apellido === "") {
        alert('El campo apellido es obligatorio');
        return;
    }
 
    if (fecha === "") {
        alert('El campo fecha es obligatorio');
        return;
    }
 
    if (email === "") {
        mostrarMensaje('El campo email es obligatorio');
        mostrarAsterisco('id-error-email');
        return;
    }
    if (!validarCorreo(email)) {
        mostrarMensaje('El correo no es valido');
        mostrarAsterisco('id-error-email');
        return;
    }
 
    if (password === "") {
        alert('El campo password es obligatorio');
        return;
    }
}
 
function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id-msg-error');
    mensaje.innerText = msg;
    mensaje.style.display = 'block';
}
 
function mostrarAsterisco(idElemento) {
    document.getElementById(idElemento).innerText = '*';
}
 
function limpiarMensajes() {
    let errorAsterisco = document.querySelectorAll('.error-asterisco');
    errorAsterisco.forEach(e => e.innerText = '');
}
 
function validarCorreo(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}