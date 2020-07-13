import React from "react";
import { Container, ProductTable, Total } from "./styles";

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from "react-icons/md";

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-everlast-kromus-masculino/26/AXB-1745-026/AXB-1745-026_zoom2.jpg?ts=1567596394&ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tenis muito dahora</strong>
              <span>122</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>$258.00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$199</strong>
        </Total>
      </footer>
    </Container>
  );
}
