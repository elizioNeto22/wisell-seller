import React, { useCallback, useContext } from "react";
import { MdAdjust } from "react-icons/md";
import AuthContext from "../../store/auth-context";

const EntidadeItem = ({ id, item, onSelectFornecedor }) => {
  const authCtx = useContext(AuthContext);

  const handleSelectFornecedor = useCallback(
    (evt) => {
      evt.preventDefault();
      onSelectFornecedor(id);
      authCtx.setFornecedor(id, item.nomeFantasia);
    },
    [onSelectFornecedor, id]
  );

  const btn_style = "info";

  return (
    <>
      <td>
        <button
          onClick={handleSelectFornecedor}
          className={`btn btn-outline-info btn-rounded`}
        >
          <MdAdjust />
        </button>
      </td>
      <td> {item.id}</td>
      <td> {item.nomeFantasia}</td>
      <td>{item.pedidoMinimo}</td>
      <td>{item.prazoEntrega}</td>
    </>
  );
};

export default EntidadeItem;
