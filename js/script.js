// Obtenemos el área de texto y el contador del HTML
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

// Guardamos el límite máximo de caracteres
const limite = 250;

// Función que actualiza el contador y revisa si se llegó al límite
function actualizarContador() {

    // Contamos cuántos caracteres ha escrito el usuario
    const cantidad = mensaje.value.length;

    // Mostramos la cantidad actual y el límite, por ejemplo "91 / 250"
    contador.textContent = cantidad + " / " + limite;

    // Si llegó al límite, ponemos el borde y el texto en rojo; si no, los quitamos
    if (cantidad >= limite) {
        mensaje.classList.add("limite");
        contador.classList.add("limite");
    } else {
        mensaje.classList.remove("limite");
        contador.classList.remove("limite");
    }
}

// Detectamos cada vez que el usuario escribe o borra en el área de texto
mensaje.addEventListener("input", function () {

    // Si el texto supera el límite, lo recortamos para no permitir más caracteres
    if (mensaje.value.length > limite) {
        mensaje.value = mensaje.value.substring(0, limite);
    }

    // Actualizamos el contador
    actualizarContador();
});

// Al abrir la página mostramos el contador en su estado inicial
actualizarContador();
