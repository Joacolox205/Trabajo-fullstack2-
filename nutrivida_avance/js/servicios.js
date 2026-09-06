let servicios = [
    {
        id: 1,
        nombre: "Primera consulta nutricional",
        precio: 35000,
        descripcion: "Evaluación inicial: anamnesis, antropometría completa y diseño del primer plan alimenticio."
    },
    {
        id: 2,
        nombre: "Control nutricional (seguimiento)",
        precio: 25000,
        descripcion: "Seguimiento mensual: medición de indicadores y ajuste del plan vigente."
    },
    {
        id: 3,
        nombre: "Plan pérdida de peso (1 mes)",
        precio: 65000,
        descripcion: "Incluye primera consulta, un control quincenal, plan alimenticio personalizado y seguimiento por WhatsApp."
    },
    {
        id: 4,
        nombre: "Plan nutrición deportiva (1 mes)",
        precio: 70000,
        descripcion: "Para deportistas y personas con actividad física frecuente. Cálculo de requerimientos energéticos y proteicos."
    },
    {
        id: 5,
        nombre: "Bioimpedanciometría",
        precio: 12000,
        descripcion: "Medición de composición corporal: masa grasa, masa muscular, agua corporal y edad metabólica."
    },
    {
        id: 6,
        nombre: "Taller de alimentación saludable",
        precio: 15000,
        descripcion: "Máximo 10 personas. Conceptos básicos de alimentación equilibrada y lectura de etiquetas."
    }
];

// Buscamos el div del html
let lista = document.getElementById("lista-servicios");

// Recorremos el arreglo de servicios
for (let i = 0; i < servicios.length; i++) {

    lista.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <div class="card-body">

                    <h2 class="card-title">${servicios[i].nombre}</h2>

                    <p class="card-text">${servicios[i].descripcion}</p>

                    <p class="card-text"><strong>Precio: $${servicios[i].precio}</strong></p>

                    <button class="btn btn-success" onclick="verDetalles(${servicios[i].id})">
                        Ver detalle
                    </button>

                </div>
            </div>
        </div>
    `;
}

// Función para ver los detalles del servicio
function verDetalles(id) {

    let servicioSeleccionado;

    // Recorremos el arreglo buscando el servicio
    for (let i = 0; i < servicios.length; i++) {

        if (servicios[i].id === id) {
            servicioSeleccionado = servicios[i];
        }
    }

    // Guardamos el servicio seleccionado
    localStorage.setItem(
        "servicio",
        JSON.stringify(servicioSeleccionado)
    );

    // Nos dirigimos al segundo HTML
    window.location.href = "detalle.html";
}
