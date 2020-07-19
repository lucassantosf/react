import React from "react";
import { Container, Cart } from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/images/logo.png";

function Header({ cartSize }) {
  console.log(cartSize);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LucasShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
