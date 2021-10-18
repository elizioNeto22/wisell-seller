import React from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../../api/graphql/queries";
import RankItem from "./RankItem";

const ProductsRank = ({ entidade, cliente, topn }) => {
  const { loading, error, data } = useQuery(queries.PRODUTOS_TOPN_POR_CLIENTE, {
    variables: { entidade, cliente, topn },
  });

  if (loading) return <p>Carregando ranking produtos cliente ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ... {error.message}
      </p>
    );

  if (data.produtos.length == 0)
    return <p style={{ color: "red" }}>nenhum produto encontrado ...</p>;

  console.log(data.produtos);

  return (
    <>
      <h4 className="card-title mb-0">
        Ranking produtos para este cliente (qtde acumulada histórica)
      </h4>

      {data?.produtos?.map((item) => {
        return <RankItem key={item.id} id={item.id} item={item} />;
      })}
    </>
  );
};

export default ProductsRank;
