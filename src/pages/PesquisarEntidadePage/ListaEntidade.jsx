import React, { useCallback, useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "react-apollo";

import * as queries from "../../api/graphql/queries_fornecedores";
import EntidadeItem from "./EntidadeItem";

const ListaEntidade = ({ entidade, termo, onSelectFornecedor }) => {
  const { loading, error, data } = useQuery(queries.FORNECEDORES_POR_TERMO, {
    variables: { entidade, termo },
  });

  console.log(data);

  if (loading) return <p>Carregando entidades ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ...
      </p>
    );
  if (!data)
    return <p style={{ color: "red" }}>nenhuma entidade encontrada...</p>;

  return (
    <div style={{ overflowY: "scroll", width: "100%", height: "500px" }}>
      <table style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Sel</th>
            <th>Código</th>
            <th>Fornecedor</th>
            <th>Ped.Mín</th>
            <th>Prazo.Ent</th>
          </tr>
        </thead>
        <tbody>
          {data?.fornecedores?.map((item) => {
            return (
              <tr key={item.id}>
                <EntidadeItem
                  id={item.id}
                  item={item}
                  onSelectFornecedor={onSelectFornecedor}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEntidade;
