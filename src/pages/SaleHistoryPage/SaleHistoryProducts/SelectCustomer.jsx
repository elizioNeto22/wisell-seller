import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { MdPauseCircleOutline, MdPlayCircleOutline } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";

import CustomerSearch from "../../CustomerSearchPage/CustomerSearch";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";

import AuthContext from "../../../store/auth-context";

const SelectCustomer = ({ entidadeId = 3, handleHasCustomer }) => {
  const [limiteCredito, setLimiteCredito] = useState(0);
  const [openSearchCustomerForm, setOpenSearchCustomerForm] = useState(false);

  const [cliente, setCliente] = useState("Nenhum cliente selecionado...");

  const authCtx = useContext(AuthContext);
  const clienteId = authCtx.clienteId;
  const clienteNome = authCtx.clienteNome;

  useEffect(() => {
    console.log("cliente- ", clienteId, clienteNome);
    if (clienteId > 0) {
      setCliente(clienteId + "-" + clienteNome);
      handleHasCustomer(true);
    }
  });

  return (
    <>
      <Form.Group>
        <label htmlFor="cliente">Cliente</label>
        <div className="input-group">
          <Form.Control type="text" value={cliente} readOnly />
          <div className="input-group-append">
            <Button
              className="btn btn-dark"
              onClick={(evt) => {
                evt.preventDefault();
                setOpenSearchCustomerForm(true);
              }}
            >
              <AiOutlineSelect style={{ fontSize: "24px" }} />
              Selecionar
            </Button>
          </div>
        </div>
      </Form.Group>

      <Form.Group>
        {/*Checa se clicou no botão e apresenta o formulário de selecionar cliente */}
        {openSearchCustomerForm && (
          <div className="card">
            <div className="card-body">
              <CustomerSearch
                entidade={entidadeId}
                setOpenSearchCustomerForm={setOpenSearchCustomerForm}
              />
            </div>
          </div>
        )}
      </Form.Group>
      <Form.Group className="col-md-12">
        <Row>
          <Col className="col-md-4">
            <Button className="btn btn-primary btn-sm">
              <MdPlayCircleOutline style={{ fontSize: "20px" }} />
              Iniciar
            </Button>{" "}
            <Button className="btn btn-primary btn-sm">
              <MdPauseCircleOutline style={{ fontSize: "20px" }} />
              Pausar
            </Button>
          </Col>
          <Col className="col-md-2">
            <label>Lim.Crédito </label>
          </Col>
          <Col className="col-md-2">
            <label>Últ.Compra </label>
          </Col>
          <Col className="col-md-2">
            <label>Meta Venda </label>
          </Col>
        </Row>
      </Form.Group>
    </>
  );
};

export default SelectCustomer;
