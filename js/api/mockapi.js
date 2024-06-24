const BASE_URL = "https://663174cdc51e14d69561c155.mockapi.io/";

export const traerDataDeDB = async () => {

    try {
        const response = await fetch(`${BASE_URL}/tareas`);
        if (!response.ok) {
            throw new Error('Error al obtener las tareas');
        }
        const tareas = await response.json();

        tareas.sort((a, b) => {
            if (a.estado !== 'completada' && b.estado === 'completada') {
                return -1;
            } else if (a.estado === 'completada' && b.estado !== 'completada') {
                return 1;
            } else {
                return new Date(b.fechacreacion) - new Date(a.fechacreacion);
            }
        });

        return tareas;
    } catch (error) {
        return [];
    }
}

export const agregarTarea = async ({ titulo, descripcion, estado, fechacreacion }) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ titulo, descripcion, estado, fechacreacion })
        };
        await fetch(`${BASE_URL}/tareas`, options);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

export const editarEstadoTarea = async ({ id, estado }) => {
    try {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ estado: estado, fechaconclusion: estado === "completada" ? new Date().toString() : "" })
        };
        await fetch(`${BASE_URL}/tareas/${id}`, options);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

export const traerConfig = async () => {
    try {
        const response = await fetch(`${BASE_URL}/config`);
        const config = await response.json();

        if (config.length == 0) {
            actualizarLocalStorage({ id: 0, idioma: "paulina-es-MX", audioSpeed: 1 });
            crearConfig({ id: 0, idioma: "paulina-es-MX", audioSpeed: 1 });
        } else {
            actualizarLocalStorage(config[0]);
        }

        return config[0];
    } catch (error) {
        console.error(error);
    }
}



export const guardarConfiguracion = async (config) => {

    try {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ idioma: config.idioma, audioSpeed: config.audioSpeed })
        };
        await fetch(`${BASE_URL}/config/1`, options);
        actualizarLocalStorage(config);

    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

const crearConfig = async (config) => {
    try {
        await fetch(`${BASE_URL}/config`, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(config)
        });
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

const actualizarLocalStorage = ({ idioma, audioSpeed }) => {
    localStorage.setItem("config", JSON.stringify({ idioma, audioSpeed }));
}
