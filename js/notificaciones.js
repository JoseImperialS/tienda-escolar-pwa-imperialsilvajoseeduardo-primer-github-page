// notificaciones.js — Web Notifications API

const btnNotificar = document.getElementById("btn-notificar");
const mensajeNotif = document.getElementById("notificaciones-mensaje");

function solicitarPermisoNotificaciones() {
    // Verificar si el navegador soporta la API de Notificaciones
    if (!("Notification" in window)) {
        mensajeNotif.textContent = "Este navegador no soporta notificaciones.";
        return;
    }

    // Solicitar permiso al usuario
    Notification.requestPermission().then((permiso) => {
        if (permiso === "granted") {
            mensajeNotif.textContent = "¡Notificaciones activadas correctamente! ✓";
            lanzarNotificacionPrueba();
        } else if (permiso === "denied") {
            mensajeNotif.textContent = "Notificaciones bloqueadas en el navegador.";
        } else {
            mensajeNotif.textContent = "Permiso de notificaciones denegado.";
        }
    });
}

function lanzarNotificacionPrueba() {
    if (Notification.permission === "granted") {
        new Notification("🛍️ Tienda Escolar", {
            body: "¡Notificaciones activas! Recibirás promociones y ofertas exclusivas.",
            icon: "icons/icon.svg"
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (btnNotificar) {
        btnNotificar.addEventListener("click", solicitarPermisoNotificaciones);
    }
});