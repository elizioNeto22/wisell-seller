import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../api/graphql/queries_pedidos";
import AuthContext from "../../../store/auth-context";
import SaleItem from "./SaleItem";
import ProductsRank from "./SaleRanking/ProductsRank";

const SaleList = ({ entidade, onItemClicked }) => {
  const authCtx = useContext(AuthContext);
  const cliente = authCtx.clienteId;

  const { loading, error, data } = useQuery(queries.PEDIDOS_POR_CLIENTE, {
    variables: { entidade, cliente },
  });

  if (loading) return <p>Carregando pedidos de venda ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ... {error.message}
      </p>
    );

  if (data.pedidos.length == 0)
    return (
      <p style={{ color: "red" }}>nenhum pedido de venda encontrado ...</p>
    );

  return (
    <div style={{ overflowY: "scroll", width: "100%", height: "700px" }}>
      <ProductsRank entidade={entidade} cliente={cliente} topn={10} />

      <table className="table" style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Info</th>
            <th>Cód</th>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Valor</th>
            <th>Itens</th>
            <th>Vols</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.pedidos?.map((item) => {
            return (
              <tr key={item.id}>
                <SaleItem
                  id={item.id}
                  item={item}
                  onItemClicked={onItemClicked}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SaleList;
