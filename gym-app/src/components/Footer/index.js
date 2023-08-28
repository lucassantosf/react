import {FooterComponent} from './styles'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa'

const iconeProps = {
    color:'white',
    size:24
}

export default function Footer(){
    return (
        <FooterComponent>
            <div>
                <FaFacebook {...iconeProps} />
                <FaTwitter {...iconeProps} />
                <FaInstagram {...iconeProps} />
            </div>
            <span>
                Desenvolvido por Lucas Santos
            </span>
        </FooterComponent>
    )
}