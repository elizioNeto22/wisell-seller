import React, { useCallback, useEffect, useContext, useState } from "react";
import { useQuery, useLazyQuery } from "react-apollo";
import * as queries from "../../../api/graphql/queries";
import AuthContext from "../../../store/auth-context";
import { Table } from "react-bootstrap";
import AddItemModal from "./AddProduct/AddItemModal";
import ProductItem from "./ProductItem";

//import "./ProductList.css";

const ProductList = ({ entidade, termo, fornecedor, marca }) => {
  const authCtx = useContext(AuthContext);
  const clienteId = authCtx.clienteId;
  const clienteNome = authCtx.clienteNome;

  //const [curId, setCurId] = useState(null);
  const [curItem, setCurItem] = useState(null);

  const handleModalOpen = useCallback((item) => {
    setCurItem(item);
  }, []);

  const handleModalClose = useCallback(() => {
    setCurItem(null);
  }, []);

  const { loading, error, data } = useQuery(
    queries.PRODUTOS_POR_TERMO_FORNECEDOR_MARCA,
    {
      variables: { entidade, termo, fornecedor, marca },
    }
  );

  if (loading) return <p>Carregando produtos ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ...{error.message}
      </p>
    );
  if (data.produtos.length == 0)
    return <p style={{ color: "red" }}>nenhum produto encontrado ...</p>;

  return (
    
    <div style={{ overflowY: "scroll", width: "100%", height: "500px" }}>
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

export default ProductList;
