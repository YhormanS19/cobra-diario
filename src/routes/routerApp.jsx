import PanelAdmin from "../pages/admin/PanelAdmin";
import Login from "../pages/auth/Login";
import Registro from "../pages/auth/Registro";
import PanelSocio from "../pages/socio/PanelSocio";
import RutaProtegida from "../components/RutaProtegida";
import ListadoSocios from "../pages/admin/ListadoSocios";
import ListadoSolicitudes from "../pages/admin/ListadoSolicitudes";
export const router = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/admin/",
    element: <RutaProtegida proteger={<PanelAdmin />} />,
    children: [
      {
        path: "socios",
        element: <ListadoSocios />,
      },
      {
        path: "solicitudes",
        element: <ListadoSolicitudes />,
      },
    ],
  },
  {
    path: "/socio",
    element: <RutaProtegida proteger={<PanelSocio />} />,
  },
];
