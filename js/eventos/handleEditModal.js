import { editarEstadoTarea } from "../api/mockapi.js"
export const openEditModal = (event) => {

    const taskCard = event.currentTarget;

    const taskId = taskCard.getAttribute("data-task-id");
    const taskTitulo = taskCard.querySelector(".card-header span").innerText.trim();
    const taskDescripcion = taskCard.querySelector("#descripcionCard").innerText.trim();
    const taskFechaCreacionTarea = taskCard.querySelector(".card-body").innerText.trim();
    const taskEstado = taskCard.querySelector("span").innerText.trim();

    const editEstadoTarea = document.getElementById('editEstadoTarea');
    const editTaskModal = new bootstrap.Modal(document.getElementById('editTaskModal'));
    const editTituloInput = document.getElementById('editTituloTarea');
    const editDescripcionTarea = document.getElementById('editDescripcionTarea');
    const editFechaCreacionTarea = document.getElementById('editFechaCreacionTarea');
    editEstadoTarea.value = taskEstado;
    editTituloInput.innerText = taskTitulo;
    editDescripcionTarea.innerText = taskDescripcion;
    editFechaCreacionTarea.innerText = taskFechaCreacionTarea;

    Array.from(editEstadoTarea.options).forEach(option => {
        option.selected = (option.value === taskEstado);
    });

    const formularioEdit = document.getElementById("formEditarTarea");
    formularioEdit.addEventListener("submit", async (e) => {
        e.preventDefault();
        const editar = { id: taskId, estado: editEstadoTarea.value };
        await editarEstadoTarea(editar);

        window.location.href = "/"
    });

    editTaskModal.show();
};

