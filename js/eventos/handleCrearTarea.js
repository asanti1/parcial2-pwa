import { agregarTarea } from "../api/mockapi.js";
export const handleSubmitTareaNueva = async (e) => {
    e.preventDefault();
    const titulo = document.getElementById('tituloTarea').value;
    const descripcion = document.getElementById('detalleTarea').value;
    const estado = document.getElementById('estadoTarea').value;
    const fecha = new Date();

    const tareaNueva = {
        titulo,
        fechacreacion: `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
        descripcion,
        estado
    };

    await agregarTarea(tareaNueva);

    window.location.href = "/";

};
