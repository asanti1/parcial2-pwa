export const crearTask = () => {
    return `
<div class="modal fade" id="crearTareaModal" tabindex="-1" aria-labelledby="createTaskModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createTaskModalLabel">Crear una nueva tarea</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="formCrearTask">
                        <div class="mb-3">
                            <label class="form-label">Título</label>
                            <input type="text" class="form-control" id="tituloTarea" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Detalle de la tarea</label>
                            <textarea class="form-control" id="detalleTarea" rows="3" required></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Estado inicial</label>
                            <select class="form-select" id="estadoTarea" required>
                                <option value="pendiente">Pendiente</option>
                                <option value="en progreso">En progreso</option>
                                <option value="completada">Completada</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary" id="botonSubmitCrearTarea">Crear tarea</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
`
};

