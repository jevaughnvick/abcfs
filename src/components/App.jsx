import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Layout from "./Layout";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout />,
        // errorElement: <NotFound />,
        children: [
            {index: true, element: <Home />},
            {path: "/game", element: <Game />},
        ]
    }
]);


export default function App(){

    return (
        <>
        <RouterProvider router={router} />
        </>
    )
}