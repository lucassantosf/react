import React from 'react'
import { ButtonRegular  } from './styles'

const Button = ({label , onClick })=>{
    return (
        <ButtonRegular onClick={onClick}>
            {label}
        </ButtonRegular>
    )
}

export default Button