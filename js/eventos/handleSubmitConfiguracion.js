import { guardarConfiguracion } from "../api/mockapi.js";

export const handleSubmitConfiguracion = async (e) => {
    e.preventDefault();
    const idioma = document.getElementById('selectIdioma').value;
    const audioSpeed = document.getElementById('audioSpeed').value;
    const config = { idioma, audioSpeed };

    await guardarConfiguracion(config);
    window.location.href = "/";
}
