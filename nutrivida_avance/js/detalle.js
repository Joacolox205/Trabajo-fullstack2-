// Recuperamos el servicio guardado en el localStorage
let servicio = JSON.parse(
    localStorage.getItem("servicio")
);

// Mostramos los datos en el html

document.getElementById("nombre").textContent =
    servicio.nombre;

document.getElementById("descripcion").textContent =
    servicio.descripcion;

document.getElementById("precio").textContent =
    "Precio: $" + servicio.precio;
