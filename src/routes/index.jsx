import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../componentes/Root";
import CartContainer from "../conteiners/CartContainer";
import ItemDetailContainer from "../conteiners/ItemDetailContainer";
import ItemListConteiner from "../conteiners/ItemListContainer";





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
                element: <ItemDetailContainer/>,
            },
            {
                path: "/cart",
                element: <CartContainer/>,

            }
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};


export default Router
