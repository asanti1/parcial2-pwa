export const handleBotonPlay = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const configAudio = JSON.parse(localStorage.getItem("config"));
    const cardElement = event.target.closest('.task-card');
    const descripcion = cardElement.querySelector('#descripcionCard').textContent;

    const mensaje = new SpeechSynthesisUtterance(descripcion);

    const vocesDisponibles = window.speechSynthesis.getVoices();
    const voz = vocesDisponibles.find(v => v.name === configAudio.idioma);
    mensaje.rate = configAudio.audioSpeed;
    mensaje.voice = voz;
    mensaje.pitch = 1;

    window.speechSynthesis.speak(mensaje);
}
