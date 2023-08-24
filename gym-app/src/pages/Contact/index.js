import React from "react";
import { Container, Medias } from "./styles";
import facebook from 'assets/facebook.svg'
import twitter from 'assets/twitter.svg'
import instagram from 'assets/instagram.svg'

const Contact = () => {
    return (
        <Container>
            <h1>
                Contact Us
            </h1>
            <p>
                mail@mail.com
            </p>
            <Medias>
                <h1>
                    Follow Us
                </h1>
                <img src={facebook} alt='facebook' />
                <img src={twitter} alt='twitter' />
                <img src={instagram} alt='instagram' />
            </Medias>
        </Container>
    )
}

export default Contact