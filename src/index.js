import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter,  RouterProvider} from "react-router-dom";

import Inicio from "./Prehistoric-Routes/Inicio"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Inicio/>,
    errorElement:<h1>La ruta es errónea</h1>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
