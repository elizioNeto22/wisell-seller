import React from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../../api/graphql/queries_dicas_venda";
import DicaVendaItem from "./DicaVendaItem";

const DicaVendaCliente = ({ entidade, cliente, produto }) => {
  const { loading, error, data } = useQuery(queries.DICAS_VENDAS, {
    variables: { entidade, cliente, produto },
  });

  if (loading) return <p>Carregando dicas ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ...{error.message}
      </p>
    );
  if (!data) return <p style={{ color: "red" }}>nenhuma dica encontrada ...</p>;

  return (
    <>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Descricao</th>
                <th>Produto</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {data?.dicas?.map((item) => {
                return (
                  <tr key={item.id}>
                    <DicaVendaItem item={item} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DicaVendaCliente;
