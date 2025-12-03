import { consultarLocalStorage } from "../utils/local-storage";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ proteger }) => {
  let token = consultarLocalStorage("token");
  return token ? proteger : <Navigate to="/" />;
};

export default RutaProtegida;
