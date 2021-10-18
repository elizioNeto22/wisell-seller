import React, { useCallback, useContext } from "react";
import { useLazyQuery } from "react-apollo";

import { MdAdjust } from "react-icons/md";
import AuthContext from "../../store/auth-context";

import * as queries from "../../api/graphql/queries_pedidos";
import { useEffect } from "react";
import { useState } from "react";

const ClienteItem = ({ entidade, id, item, onSelectCliente }) => {
  const [cliente, setCliente] = useState();

  const fecharListaCliente = () => {
    if (cliente) onSelectCliente();
  };

  const authCtx = useContext(AuthContext);
  //  const entidade = 3;
  const vendedor = 6;

  const [obterPedidoCorrente, { loading, error, data }] = useLazyQuery(
    queries.PEDIDO_VENDA_CORRENTE
  );

  const handleSelectCustomer = (evt) => {
    evt.preventDefault();
    authCtx.setCustomer(
      id,
      item.nomeFantasia,
      item.dataUltimaCompra,
      item.metaValor
    );

    obterPedidoCorrente({
      variables: {
        entidade,
        vendedor,
        cliente: id,
      },
    });
    console.log(entidade, vendedor, cliente, id);
    setCliente(id);
  };

  useEffect(() => {
    // Setar pedido corrente
    if (data) {
      authCtx.setPedido(data.pedidoCorrente);
      fecharListaCliente();
    }
  }, [data, cliente, fecharListaCliente]);

  const btn_style = "info";

  return (
    <>
      <td>
        <button
          onClick={handleSelectCustomer}
          className={`btn btn-outline-info btn-rounded`}
        >
          <MdAdjust />
        </button>
      </td>
      <td> {item.id}</td>
      <td> {item.nomeFantasia}</td>
      <td>{item.metaValor}</td>
      <td>{item.dataUltimaCompra}</td>
      <td>{item.cdCliente}</td>
    </>
  );
};

export default ClienteItem;
