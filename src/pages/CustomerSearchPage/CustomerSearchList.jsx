import React, { useCallback, useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "react-apollo";

import * as queries from "../../api/graphql/queries";

import { Table } from "react-bootstrap";

import ClienteItem from "./ClienteItem";

//import "./ProductList.css";

const CustomerSearchList = ({ entidade, termo, onSelectCliente }) => {
  const { loading, error, data } = useQuery(queries.CLIENTES_POR_TERMO, {
    variables: { entidade, termo },
  });

  if (loading) return <p>Carregando clientes...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell...
      </p>
    );
  if (data.clientes.length == 0)
    return <p style={{ color: "red" }}>nenhum cliente encontrado...</p>;

  return (
    <div style={{ overflowY: "scroll", width: "100%", height: "500px" }}>
      <table style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Sel</th>
            <th>Código</th>
            <th>Cliente</th>
            <th>Meta</th>
            <th>Últ.Compra</th>
            <th>ERP</th>
          </tr>
        </thead>
        <tbody>
          {data.clientes.map((item) => {
            return (
              <tr key={item.id}>
                <ClienteItem
                  entidade={entidade}
                  id={item.id}
                  item={item}
                  onSelectCliente={onSelectCliente}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerSearchList;
