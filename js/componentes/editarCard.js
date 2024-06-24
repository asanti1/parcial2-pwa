export const editarCard = (card = {}) => {
    return `
       <div class="modal fade" id="editTaskModal" tabindex="-1" aria-labelledby="editTaskModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editTaskModalLabel">Editar Estado de la Tarea</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="formEditarTarea">
                            <div class="mb-3">
                                <h2 id="editTituloTarea"> ${card.titulo || null} </h2>
                                <p id="editDescripcionTarea"> ${card.descripcion || null} </p>
                                <small id="editFechaCreacionTarea"> ${card.fechacreacion || null} </small> 
                                <br>
                                <label class="form-label">Estado</label>
                                <select class="form-select" id="editEstadoTarea" required>
                                    <option value="pendiente">Pendiente</option>
                                    <option value="en progreso">En progreso</option>
                                    <option value="completada">Completada</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Guardar cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}
