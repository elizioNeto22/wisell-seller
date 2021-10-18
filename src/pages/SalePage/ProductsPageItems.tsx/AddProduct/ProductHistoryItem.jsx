import React from "react";
import { currencyFormatter } from "../../../../util/formatCurrency";

const ProductHistoryItem = ({ item }) => {
  return (
    <>
      <td> {item.fechamento}</td>
      <td> {currencyFormatter(item.valorUnitario)}</td>
      <td> {item.quantidadeVendida}</td>
    </>
  );
};

export default ProductHistoryItem;
