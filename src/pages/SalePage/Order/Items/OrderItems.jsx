import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../../api/graphql/queries";

import { Table } from "react-bootstrap";
import AddItemModal from "../../ProductsPageItems.tsx/AddProduct/AddItemModal";
import ProductItem from "../../ProductsPageItems.tsx/ProductItem";

const OrderItems = () => {
  const [curId, setCurId] = useState(null);

  const handleModalOpen = useCallback((id) => {
    setCurId(id);
  }, []);

  const handleModalClose = useCallback(() => {
    setCurId(null);
  }, []);

  const [term, setTerm] = useState("");

  const { loading, error, data } = useQuery(queries.PRODUTOS);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table striped bordered hover variant="gray">
        <thead>
          <tr>
            <th>Cód</th>
            <th>Descrição</th>
            <th>ÚltComp</th>
            <th>Giro</th>
            <th>Est.Disp</th>
            <th>%Rec</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {data?.unidades?.map((item) => {
            return (
              <tr key={item.id}>
                <ProductItem
                  id={item.id}
                  item={item}
                  edit={true}
                  onModalOpen={handleModalOpen}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
      {curId && (
        <AddItemModal id={curId} edit={true} onModalClose={handleModalClose} />
      )}
    </div>
  );
};

export default OrderItems;
