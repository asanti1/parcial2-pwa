export const obtenerVoces = () => {
    let voces = window.speechSynthesis.getVoices();
    if (voces.length !== 0) {
        return voces;
    } else {
        return new Promise(resolve => {
            window.speechSynthesis.onvoiceschanged = () => {
                voces = window.speechSynthesis.getVoices();
                resolve(voces);
            };
        });
    }
};
const filtrarYSeleccionarVoces = (voces, idioma, cantidad) => {
    return voces
        .filter(voz => voz.lang.startsWith(idioma))
        .slice(0, cantidad);
};
// hay un monton de voces, si no limito la cantidad la pagina se ponia re contra pesada
export const actualizarSelectVoces = (voces) => {
    const selectIdioma = document.getElementById('selectIdioma');
    selectIdioma.innerHTML = '';

    const vocesEspanol = filtrarYSeleccionarVoces(voces, 'es', 5);
    const vocesIngles = filtrarYSeleccionarVoces(voces, 'en', 5);

    [...vocesEspanol, ...vocesIngles].forEach(voz => {
        const option = document.createElement('option');
        option.value = voz.name;
        option.textContent = `${voz.name} (${voz.lang})`;
        selectIdioma.appendChild(option);
    });
};

export const crearConfigModal = () => {

    return `
        <div class="modal fade" id="configModal" tabindex="-1" aria-labelledby="configModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="configModalLabel">Configuración</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="configForm">
                            <div class="mb-3">
                                <label for="selectIdioma" class="form-label">Seleccionar idioma</label>
                                <select class="form-select" id="selectIdioma" required>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="audioSpeed" class="form-label">Velocidad de audio</label>
                                <input type="range" class="form-range" id="audioSpeed" min="-0.9" max="1.1" step="0.1" value="1">
                                <div class="d-flex justify-content-between">
                                    <span>-0.9</span>
                                    <span>1.1</span>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Guardar configuración</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
};

