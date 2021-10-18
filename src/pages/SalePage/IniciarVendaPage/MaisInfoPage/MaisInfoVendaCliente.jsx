import React, { useState, useEffect } from "react";

import { Form } from "react-bootstrap";

const MaisInfoVendaCliente = () => {
  return (
    <>
      <div className="card-body">
        <Form.Group className="col-md-12">
          <label htmlFor="observacao" className="form-label">
            Observação
          </label>
          <Form.Control
            as="textarea"
            rows={6}
            className="form-control"
            id="observacao"
            placeholder="+info sobre a venda"
          />
        </Form.Group>
      </div>
    </>
  );
};

export default MaisInfoVendaCliente;
