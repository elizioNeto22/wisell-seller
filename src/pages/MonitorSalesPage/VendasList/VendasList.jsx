import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../../api/graphql/queries";

import { Table } from "react-bootstrap";
import VendasItem from "./VendasItem";

const VendasList = () => {
  const [curId, setCurId] = useState(null);

  const handleModalOpen = useCallback((id) => {
    setCurId(id);
  }, []);

  const handleModalClose = useCallback(() => {
    setCurId(null);
  }, []);

  const [term, setTerm] = useState("");

  const { loading, error, data } = useQuery(queries.UNIDADES);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Table striped bordered hover variant="gray">
        <thead>
          <th>Num.Ped</th>
          <th>Cliente</th>
          <th>Data</th>
          <th>Valor</th>
          <th>%Val</th>
          <th>Itens</th>
          <th>%Itens</th>
          <th>Vols</th>
          <th>Status</th>
          <th>%Rec</th>
          <th>Editar</th>
        </thead>
        <tbody>
          {data?.unidades?.map((item) => {
            return (
              <tr key={item.codigo}>
                <VendasItem id={item.codigo} item={item} />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default VendasList;
