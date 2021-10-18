import React, { useCallback } from "react";
import { MdAddShoppingCart, MdModeEdit } from "react-icons/md";
import { currencyFormatter } from "../../../../util/formatCurrency";

const OrderItem = ({ item }) => {
  return (
    <>
      <td> {item.id}</td>
      <td> {item.produto.descricao}</td>
      <td>{currencyFormatter(item.valorUnitario)}</td>
      <td>{item.quantidadeVendida}</td>
    </>
  );
};

export default OrderItem;
