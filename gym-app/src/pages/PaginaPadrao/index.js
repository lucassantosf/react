import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from 'components/Footer'
import { Center, Left, Right, Container } from './styles'

export default function PaginaPadrao() {
    return (
        <div>
            <Navbar/>

            <Container>

                <Left/>

                <Center>
                    <Outlet/>
                </Center>

                <Right/>

            </Container>

            <Footer/>
        </div>
    )
}