import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../../api/graphql/queries_pedidos";

import { Table } from "react-bootstrap";
import OrderItem from "./OrderItem";
//import AuthContext from "../../../store/auth-context";

const OrderItems = ({ entidade, pedido }) => {
  const [curId, setCurId] = useState(null);

  //const authCtx = useContext(AuthContext);
  //const pedido = authCtx.pedidoId;

  const { loading, error, data } = useQuery(queries.ITENS_PEDIDOS, {
    variables: { entidade, pedido },
  });

  if (loading) return <p>Carregando itens pedidos de venda ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ... {error.message}
      </p>
    );

  if (data.items.length == 0)
    return (
      <p style={{ color: "red" }}>nenhum item pedido de venda encontrado ...</p>
    );

  return (
    <div style={{ overflowY: "scroll", width: "100%", height: "500px" }}>
      <table className="table" style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Cód</th>
            <th>Descrição</th>
            <th>Vlr.Unit</th>
            <th>Qtde</th>
          </tr>
        </thead>
        <tbody>
          {data?.items?.map((item) => {
            return (
              <tr key={item.id}>
                <OrderItem item={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItems;
