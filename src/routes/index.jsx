import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../componentes/Root";
import ItemListConteiner from "../conteiners/ItemListConteiner";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <ItemListConteiner />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListConteiner />,
            },
            {
                path: "/detail/:id",
                element: <h2>Detalle</h2>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};


export default Router
