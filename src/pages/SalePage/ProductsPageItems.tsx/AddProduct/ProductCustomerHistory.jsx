import React, { useContext } from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../../api/graphql/queries_pedidos";
import AuthContext from "../../../../store/auth-context";
import ProductHistoryItem from "./ProductHistoryItem";

const ProductCustomerHistory = ({ entidade, produto }) => {
  const authCtx = useContext(AuthContext);
  const cliente = authCtx.clienteId;

  const { loading, error, data } = useQuery(
    queries.ITENS_PEDIDOS_PRODUTO_CLIENTE,
    {
      variables: { entidade, produto, cliente },
    }
  );

  if (loading) return <p>Carregando histórico venda produto ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ... {error.message}
      </p>
    );

  if (data.items.length == 0)
    return (
      <p style={{ color: "red" }}>nenhum histórico de venda encontrado ...</p>
    );

  console.log(data.items);

  return (
    <div style={{ overflowY: "scroll", width: "100%", height: "490px" }}>
      <table className="table" style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Qtde</th>
          </tr>
        </thead>
        <tbody>
          {data?.items?.map((item) => {
            return (
              <tr key={item.id}>
                <ProductHistoryItem item={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCustomerHistory;
