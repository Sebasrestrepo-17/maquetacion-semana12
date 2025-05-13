import { useNavigate } from "react-router-dom"
import { alerta } from "../helpers/funciones"

const MenuLateral = () => {
    let usuario = JSON.parse(localStorage.getItem("usuario"))
    let redireccion = useNavigate()

    function CerrarSesion() {
        localStorage.removeItem("usuario")
        localStorage.removeItem("token")
        alerta("Hasta Pronto", "Cerrando Sesion", "info")
        redireccion("/")
    }


    return (
        <aside className="aplicacion_menu-lateral">
            <h1 className="aplicacion__menu-lateral-logo">
                Bienvenido{" "}
                <span className="aplicacion__menu-lateral-logo--resaltado"></span>
            </h1>
            <h2>Usuario: {usuario.nombre}</h2>
            
            <nav className="aplicacion__menu-lateral-navegacion">
                <a className="aplicacion__menu-lateral-navegacion-item" href="/home">
                    Home
                </a>
                 <a className="aplicacion__menu-lateral-navegacion-item" href="/servicios">
                    Servicios
                </a>
                <a className="aplicacion__menu-lateral-navegacion-item" href="/contacto">
                    Contacto
                </a>
                <a className="aplicacion__menu-lateral-navegacion-item" href="/acerca">
                    Acerca de
                </a>
                <button
                    type="button"
                    onClick={CerrarSesion}
                    className="aplicacion__menu-lateral-navegacion-item"
                >
                    Cerrar Sesion
                </button>
            </nav>
        </aside>
    )
}

export default MenuLateral;