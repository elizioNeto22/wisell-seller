import React from "react";

import { Form } from "react-bootstrap";

import SelectMarcas from "../../../../components/binders/SelectMarcas";

const MaisFiltro = ({ entidadeId = 5, onSelectMarca }) => {
  return (
    <Form.Group className="input-group">
      <SelectMarcas entidade={entidadeId} onSelectMarca={onSelectMarca} />
    </Form.Group>
  );
};

export default MaisFiltro;
