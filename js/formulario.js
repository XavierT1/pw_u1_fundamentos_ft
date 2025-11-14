function guardar() {
  validarCampos();
}

function validarCampos() {
  limpiarMensajes();

  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let fecha = document.getElementById("fecha").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (nombre === "") {
    mostrarMensaje("Nombre está vacío");
    mostrarAsterisco("id-error-nombre");
    return;
  }

  if (apellido === "") {
    mostrarMensaje("Apellido está vacío");
    mostrarAsterisco("id-error-apellido");
    return;
  }

  if (fecha === "") {
    mostrarMensaje("Fecha está vacía");
    mostrarAsterisco("id-error-fecha");
    return;
  }

  if (email === "") {
    mostrarMensaje("Email está vacío");
    mostrarAsterisco("id-error-email");
    return;
  }

  if (!validarCorreo(email)) {
    mostrarMensaje("El correo no es válido");
    mostrarAsterisco("id-error-email");
    return;
  }

  if (password === "") {
    mostrarMensaje("Contraseña está vacía");
    mostrarAsterisco("id-error-password");
    return;
  }
}

function mostrarMensaje(msg) {
  let mensaje = document.getElementById("id-msg-error");
  mensaje.innerText = msg;
  mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
  document.getElementById(idElemento).innerText = "*";
}

function limpiarMensajes() {
  document.getElementById("id-msg-error").innerText = "";
  document.getElementById("id-msg-error").style.display = "none";

  let errorAsterisco = document.querySelectorAll(".error_asterisco");
  errorAsterisco.forEach((e) => (e.innerText = ""));
}

function validarCorreo(email) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
}
