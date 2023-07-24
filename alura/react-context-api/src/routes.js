import Carrinho from 'pages/Carrinho'
import Feira from 'pages/Feira'
import Login from 'pages/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { UsuarioProvider } from 'common/context/Usuario'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <UsuarioProvider>
                        <Login />
                    </UsuarioProvider>
                </Route>
                <Route exact path="/feira">
                    <Feira />
                </Route>
                <Route exact path="/carrinho">
                    <Carrinho />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router