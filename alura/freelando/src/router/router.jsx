import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/selecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/layoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path:'cadastro',
                element: <LayoutBaseCadastro/>,
                children:[
                    {
                        path: '',
                        element: <SelecaoCliente/>,
                    },
                    {
                        path:'cliente',
                        element: <h1>Interesse</h1>
                    },
                    {
                        path:'dados-pessoas',
                        element: <h1>Dados pessoais</h1>
                    },
                    {
                        path:'concluido',
                        element: <h1>Concluido</h1>
                    }
                ]
            }
        ],
    },
]);