import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/selecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/layoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/cadastro/interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />,
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoais/>
                    },
                    {
                        path: 'concluido',
                        element: <Concluido/>
                    }
                ]
            }
        ],
    },
]);