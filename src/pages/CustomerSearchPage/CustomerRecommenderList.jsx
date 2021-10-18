import React, { useCallback, useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "react-apollo";

import * as queries from "../../api/graphql/queries";

import { Table } from "react-bootstrap";

import ClienteItem from "./ClienteItem";

//import "./ProductList.css";

const CustomerRecommenderList = ({ entidade, tipo, onSelectCliente }) => {
  const vendedor = 0;
  const atributo = "90"; ///Mínimo Dias sem comprar
  const topn = 30; //clientes a retornar
  if (tipo > 1)
    //RecTypes
    tipo = 1;
  console.log(entidade, vendedor, tipo, atributo, topn);

  const { loading, error, data } = useQuery(queries.CLIENTES_POR_RECOMENDACAO, {
    variables: { entidade, vendedor, tipo, atributo, topn },
  });

  if (loading) return <p>Carregando clientes ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ...{error}
      </p>
    );
  if (!data)
    return <p style={{ color: "red" }}>nenhum cliente encontrado ...</p>;

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
          {data?.clientes?.map((item) => {
            return (
              <tr key={item.id}>
                <ClienteItem
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

export default CustomerRecommenderList;
