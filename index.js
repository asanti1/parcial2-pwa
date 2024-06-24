import { navBar } from "./js/componentes/navbar.js";
import { crearTask } from "./js/componentes/crearTask.js";
import { handleSubmitTareaNueva } from "./js/eventos/handleCrearTarea.js";
import { editarCard } from "./js/componentes/editarCard.js";
import { openEditModal } from "./js/eventos/handleEditModal.js";
import { traerDataDeDB, traerConfig } from "./js/api/mockapi.js";
import { crearConfigModal, obtenerVoces, actualizarSelectVoces } from "./js/componentes/configuracion.js";
import { handleSubmitConfiguracion } from "./js/eventos/handleSubmitConfiguracion.js";
import { handleBotonPlay } from "./js/eventos/handleBotonPlay.js"
import { crearCard } from "./js/componentes/card.js";

document.addEventListener("DOMContentLoaded", async () => {
    const containerDiv = document.querySelector("#task-container");
    containerDiv.innerHTML += navBar();
    containerDiv.innerHTML += crearTask();
    containerDiv.innerHTML += crearConfigModal();



    const tareasOrdenadas = await traerDataDeDB();
    if (tareasOrdenadas.length === 0) {
        containerDiv.innerHTML += crearCard({ titulo: 'No hay tareas disponibles', descripcion: '', estado: '', fecha: '' });
    } else {
        tareasOrdenadas.forEach(tarea => {
            containerDiv.innerHTML += crearCard(tarea);
        });
    }

    await traerDataDeDB();
    await traerConfig();
    document.body.innerHTML += editarCard();
    const formTest = document.getElementById("formCrearTask");
    formTest.addEventListener("submit", (e) => {
        handleSubmitTareaNueva(e);
    });

    const formConfig = document.getElementById("configForm");
    actualizarSelectVoces(obtenerVoces());
    formConfig.addEventListener("submit", (e) => {
        handleSubmitConfiguracion(e);
    })

    document.querySelectorAll('.task-card').forEach(card => {
        card.addEventListener('click', (event) => {
            if (card.classList.contains("completada")) return;
            openEditModal(event);

        });
    });
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', handleBotonPlay);
    });
});
