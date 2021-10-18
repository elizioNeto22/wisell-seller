import React, { useCallback, useEffect, useContext, useState } from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../../api/graphql/queries_recomendacoes";
import AuthContext from "../../../../store/auth-context";
import AddItemModal from "../AddProduct/AddItemModal";
import ProductItem from "../ProductItem";

//import "./ProductList.css";

const RecommenderList = ({ entidade, atributo, tipo }) => {
  const authCtx = useContext(AuthContext);
  const cliente = authCtx.clienteId;
  const clienteNome = authCtx.clienteNome;

  const [curItem, setCurItem] = useState(null);

  const handleModalOpen = useCallback((item) => {
    setCurItem(item);
  }, []);

  const handleModalClose = useCallback(() => {
    setCurItem(null);
  }, []);

  console.log("rec-", entidade, atributo, tipo);
  const { loading, error, data } = useQuery(
    queries.RECOMENDACOES_POR_ATRIBUTO,
    {
      variables: { entidade, atributo, tipo },
    }
  );

  if (loading) return <p>Carregando produtos ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ... {error.message}
      </p>
    );
  if (!data)
    return <p style={{ color: "red" }}>nenhum produto encontrado ...</p>;

  return (
    <div style={{ overflowY: "scroll", width: "100%", height: "500px" }}>
      {tipo == 1 && <h5>recomendações...</h5>}
      {tipo == 2 && (
        <h5 style={{ color: "green" }}>
          Produtos mais vendidos por nossa empresa!
        </h5>
      )}
      {tipo == 3 && (
        <h5 style={{ color: "green" }}>Produtos Top 10 para este cliente!</h5>
      )}
      {tipo == 4 && (
        <h5 style={{ color: "green" }}>
          Produtos Top 10 para este cliente, por clientes semelhantes
          (Especialista)!
        </h5>
      )}
      <table style={{ color: "black" }}>
        <thead>
          <tr>
            <th>Cód</th>
            <th>Descrição</th>
            <th>Marca</th>
            <th>%Rec</th>
            <th>Vender</th>
          </tr>
        </thead>
        <tbody>
          {data?.produtos?.map((item) => {
            return (
              <tr key={item.id}>
                <ProductItem
                  id={item.id}
                  item={item}
                  edit={false}
                  onModalOpen={handleModalOpen}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
      {curItem && (
        <AddItemModal
          item={curItem}
          edit={false}
          onModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default RecommenderList;
