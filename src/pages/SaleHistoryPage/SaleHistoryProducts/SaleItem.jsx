import React, { useCallback } from "react";
import { MdInfo } from "react-icons/md";
import { currencyFormatter } from "../../../../src/util/formatCurrency";

const SaleItem = ({ id, item, onItemClicked }) => {
  const handleItemClicked = useCallback(
    (evt) => {
      evt.preventDefault();
      onItemClicked(id);
    },
    [onItemClicked, id]
  );

  return (
    <>
      <td>
        <button
          onClick={handleItemClicked}
          className={`btn btn-info btn-rounded`}
        >
          <MdInfo />
        </button>
      </td>
      <td> {item.id}</td>
      <td> {item.fechamento}</td>
      <td> {item.responsavel.vendedor.nome}</td>
      <td> {currencyFormatter(item.valorPedido)}</td>
      <td> {item.qtdeItens}</td>
      <td> {item.qtdeVolumes}</td>
      <td> {item.status.descricao}</td>
    </>
  );
};

export default SaleItem;
