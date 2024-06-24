export const navBar = () => {
    return `<nav class="navbar navbar-light bg-light mb-1">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu"
                aria-controls="offcanvasMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <span class="navbar-brand mb-0 h1">Taskmgr</span>
        </nav>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasMenuLabel">Menú</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item"><a href="#" id="crearTarea" data-bs-toggle="modal" data-bs-target="#crearTareaModal" >Crear nueva tarea</a></li>
                    <li class="list-group-item"><a href="#" id="configurarApp" data-bs-toggle="modal" data-bs-target="#configModal">Configurar la aplicación</a>
                    </li>
                </ul>
            </div>
        </div>`};


