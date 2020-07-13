import React from "react";
import { ProductList } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
          alt="Tênis"
        ></img>
        <strong>Tênis muito legal</strong>
        <span>R$129.99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
          alt="Tênis"
        ></img>
        <strong>Tênis muito legal</strong>
        <span>R$129.99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
          alt="Tênis"
        ></img>
        <strong>Tênis muito legal</strong>
        <span>R$129.99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
          alt="Tênis"
        ></img>
        <strong>Tênis muito legal</strong>
        <span>R$129.99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
          alt="Tênis"
        ></img>
        <strong>Tênis muito legal</strong>
        <span>R$129.99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
          alt="Tênis"
        ></img>
        <strong>Tênis muito legal</strong>
        <span>R$129.99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
