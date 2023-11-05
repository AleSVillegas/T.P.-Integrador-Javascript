document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del formulario
    const cantidadInput = document.getElementById("cantidad");
    const categoriaSelect = document.getElementById("categoria");
    const totalSpan = document.getElementById("total");
    const formulario = document.getElementById("formulario");
    const borrarBtn = document.getElementById("borrarBtn");

    // Definir los descuentos por categoría
    const descuentos = {
        "80": 0.8,  // 80% para Estudiante
        "50": 0.5,  // 50% para Trainee
        "15": 0.15  // 15% para Junior
    };

    // Manejar el evento "submit" del formulario
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener la cantidad y la categoría seleccionada
        const cantidad = parseInt(cantidadInput.value);
        const categoria = categoriaSelect.value;

        // Obtener el descuento correspondiente a la categoría
        const descuento = descuentos[categoria];

        // Calcular el total a pagar con descuento
        const precioTicket = 200;  // Precio base del ticket
        const totalPagar = Math.round(cantidad * precioTicket * (1 - descuento));

        // Actualizar el contenido de "Total a Pagar"
        totalSpan.textContent = `${totalPagar}`;
    });

    // Manejar el evento "click" del botón "Borrar"
    borrarBtn.addEventListener("click", function () {
        // Restablecer el formulario y el contenido de "Total a Pagar"
        formulario.reset();
        totalSpan.textContent = "";
    });
});

