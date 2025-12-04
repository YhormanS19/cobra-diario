import { alertaRedireccion } from "../utils/alertas";
import {
  consultarLocalStorage,
  eliminarLocalStorage,
} from "../utils/local-storage";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
  let redirection = useNavigate();
  let usuario = consultarLocalStorage("usuario");
  let iniciales = usuario.name
    .split(" ")
    .map((index) => index[0])
    .join("");
  function cerrarSesion() {
    eliminarLocalStorage("token");
    eliminarLocalStorage("usuario");
    alertaRedireccion("Cerrando sesión", "info", "/", redirection);
  }
  return (
    <header>
      <span>
        {iniciales}, {usuario.name}
      </span>{" "}
      <span>{usuario.role}</span>
      <nav>
        {usuario.role == "admin" ? (
          <div>
            <Link to="/admin/solicitudes">Ver solicitudes</Link>
            <Link to="/admin/socios">Ver Socios</Link>
          </div>
        ) : (
          <Link to="">Realizar solicitud</Link>
        )}
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Header;
