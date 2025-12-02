import Login from "../pages/Login";
import Registro from "../pages/Registro";
export const router = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
];
