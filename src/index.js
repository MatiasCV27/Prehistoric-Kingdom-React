import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter,  RouterProvider} from "react-router-dom";

import Inicio from "./Prehistoric-Routes/Inicio"
import Mantenimiento from "./Prehistoric-Routes/Mantenimiento"
import Contacto from "./Prehistoric-Routes/Contacto"
import P_Triasico from "./Prehistoric-Routes/Periodo-Triasico"
import P_Jurasico from "./Prehistoric-Routes/Periodo-Jurasico"
import P_Cretacico from "./Prehistoric-Routes/Periodo-Cretacico"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Inicio/>,
    errorElement:<h1>La ruta es errónea</h1>,
  },
  {
    path:"/Mantenimiento",
    element:<Mantenimiento/>,
  },
  {
    path:"/Contacto",
    element:<Contacto/>,
  },
  {
    path:"/Periodo-Triasico",
    element:<P_Triasico/>,
  },
  {
    path:"/Periodo-Jurasico",
    element:<P_Jurasico/>,
  },
  {
    path:"/Periodo-Cretacico",
    element:<P_Cretacico/>,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);