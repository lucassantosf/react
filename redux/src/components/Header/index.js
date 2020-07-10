import React from "react";
import { Container, Cart } from "./style";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LucasShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
