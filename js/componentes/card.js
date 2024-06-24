function selectIcon(estado) {
    if (estado === "completada") {
        return `<i class="bi bi-check-square-fill"></i>`
    } else if (estado === "en progreso" || estado === "pendiente") {
        return `<button class="btn btn-primary play-button" data-bs-toggle="tooltip" title="Escuchar tarea"><i class="bi bi-play-btn"></i> </button>`;
    }
    return "";
}

export const crearCard = (card = {}) => {
    const icono = selectIcon(card.estado);

    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card task-card ${card.estado}" data-task-id="${card.id}">
                <span style="display:none" id="estadoCard"> ${card.estado}</span>
                <span style="display:none" id="descripcionCard"> ${card.descripcion}</span>
                <div class="card-header d-flex justify-content-between align-items-center">
                    <span>${card.titulo}</span>
                    ${icono}
                </div>
                <div class="card-body">
                   Creada: ${card.fechacreacion}
                </div>
            </div>
        </div>
    `;
}

