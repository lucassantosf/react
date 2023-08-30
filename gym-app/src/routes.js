import Home from './pages/Home'
import PaginaPadrao from './pages/PaginaPadrao'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

import Aluno from './pages/Admin/Aluno'
import AlunoStore from './pages/Admin/Aluno/store'
import AlunoUpdate from './pages/Admin/Aluno/update'
import Plano from './pages/Admin/Plano'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaPadrao />}>

                    <Route index element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/alunos">
                        <Route index element={<Aluno/>} />
                        <Route path="cadastrar" element={<AlunoStore />} />
                        <Route path=":id/atualizar" element={<AlunoUpdate />} />
                    </Route>

                    <Route path="/planos">
                        <Route index element={<Plano/>} />
                    </Route>

                    <Route path="/*" element={<NotFound />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router