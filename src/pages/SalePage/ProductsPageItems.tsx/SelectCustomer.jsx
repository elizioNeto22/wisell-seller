import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { MdPauseCircleOutline, MdPlayCircleOutline } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";

import CustomerSearch from "../../CustomerSearchPage/CustomerSearch";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";

import AuthContext from "../../../store/auth-context";
import IniciarVenda from "../IniciarVendaPage/IniciarVenda";
import { currencyFormatter } from "../../../util/formatCurrency";

const SelectCustomer = ({ entidadeId = 5 }) => {
  const [limiteCredito, setLimiteCredito] = useState(0);
  const [openSearchCustomerForm, setOpenSearchCustomerForm] = useState(false);
  const [openStartSaleForm, setOpenStartSaleForm] = useState(false);

  const [cliente, setCliente] = useState("Nenhum cliente selecionado...");

  const authCtx = useContext(AuthContext);
  const clienteId = authCtx.clienteId;
  const clienteNome = authCtx.clienteNome;
  const clienteUltimaCompra = authCtx.clienteUltimaCompra;
  const clienteMetaVenda = authCtx.clienteMetaVenda;

  useEffect(() => {
    if (clienteId > 0) setCliente(clienteId + "-" + clienteNome);
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
            <Button
              className="btn btn-primary btn-sm"
              onClick={(evt) => {
                evt.preventDefault();
                setOpenStartSaleForm(true);
              }}
            >
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
            <label style={{ fontSize: "12px", color: "red" }}>
              {currencyFormatter(limiteCredito)}
            </label>
          </Col>
          <Col className="col-md-2">
            <label>Últ.Compra </label>
            <label style={{ fontSize: "12px", color: "red" }}>
              {clienteUltimaCompra}
            </label>
          </Col>
          <Col className="col-md-2">
            <label>Meta Venda </label>
            <label style={{ fontSize: "12px", color: "red" }}>
              {currencyFormatter(clienteMetaVenda)}
            </label>
          </Col>
        </Row>
      </Form.Group>
      {openStartSaleForm && (
        <IniciarVenda
          entidadeId={entidadeId}
          clienteId={clienteId}
          metavendaValor={clienteMetaVenda}
          setOpenStartSaleForm={setOpenStartSaleForm}
        />
      )}
    </>
  );
};

export default SelectCustomer;
