import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import classes from "./AddItemModal.module.css";
import { MdSave } from "react-icons/md";
import { Tabs, Tab } from "react-bootstrap";

import {
  numberFormat,
  currencyFormatter,
} from "../../../../util/formatCurrency";
import ProductCustomerHistory from "./ProductCustomerHistory";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onModalClose} />;
};

const ModalOverlay = (props) => {
  const entidadeId = 5;
  const [totalItem, setTotalItem] = useState(
    //parseFloat(props.produto.meta * props.produto.preco).toFixed(2)
    currencyFormatter(props.produto.meta * props.produto.preco)
  );
  const [precoUnitario, setPrecoUnitario] = useState(props.produto.preco);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    alert(JSON.stringify(data));
  };

  const OnQtdeVendidaChange = (event) => {
    //recalcular preco item
    const quantidade = event.target.value;
    if (quantidade >= 0)
      setTotalItem(currencyFormatter(quantidade * precoUnitario));
    //setTotalItem(parseFloat(quantidade * precoUnitario).toFixed(2));
  };

  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h5>
          Produto: {props.produto.codigo} - {props.produto.descricao}
        </h5>
      </header>
      {/*<form onSubmit={handleAddProduct} className="form"> */}
      <div className="row d-flex ">
        <div className="col ">
          <div className="card">
            <div className="card-body">
              <Form onSubmit={handleSubmit(handleAddProduct)} className="form">
                <h4 className="col-md-12 align-self-center">
                  Dados da Venda - (Meta: {props.produto.meta})
                </h4>
                <Form.Group className="col-md-12">
                  <Row>
                    <Col>
                      <label
                        htmlFor="qtdeVendida"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Qtde
                      </label>
                      <Form.Control
                        style={{ color: "red" }}
                        type="number"
                        required
                        defaultValue={props.produto.meta}
                        {...register("qtdeVendida")}
                        className="form-control mb-2 mr-sm-2"
                        id="qtdeVendida"
                        onChange={OnQtdeVendidaChange}
                      />
                    </Col>
                    <Col>
                      <label
                        htmlFor="precoUnitario"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Preço
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        defaultValue={props.produto.preco}
                        value={precoUnitario}
                        {...register("precoUnitario")}
                        id="precoUnitario"
                        readOnly
                      />
                    </Col>
                    <Col>
                      <label
                        htmlFor="desconto"
                        className="form-label mb-2 mr-sm-2"
                      >
                        %Desconto
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        defaultValue={props.produto.desconto}
                        {...register("desconto")}
                        id="desconto"
                        readOnly
                      />
                    </Col>
                    <Col>
                      <label
                        htmlFor="totalItem"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Total Item
                      </label>
                      <Form.Control
                        style={{ color: "green" }}
                        type="text"
                        className="form-control mb-2 mr-sm-2"
                        defaultValue={props.produto.totalItem}
                        value={totalItem}
                        {...register("totalItem")}
                        id="totalItem"
                        readOnly
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <h4 className="col-md-12 align-self-center">
                  +Info sobre o produto no cliente
                </h4>
                <Form.Group className="col-md-12">
                  <Row>
                    <Col>
                      <label
                        htmlFor="estoque"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Est.Atual
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="estoque"
                      />
                    </Col>
                    <Col>
                      <label htmlFor="giro" className="form-label mb-2 mr-sm-2">
                        Giro-Mês
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="giro"
                      />
                    </Col>
                    <Col>
                      <label
                        htmlFor="ult-preco"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Últ.Preço
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="desconto"
                      />
                    </Col>
                    <Col>
                      <label
                        htmlFor="prod-similar"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Similares
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="prod-similar"
                      />
                    </Col>
                  </Row>
                  <div className="form-check mx-sm-2">
                    <label className="form-check-label">
                      <Form.Control
                        type="checkbox"
                        className="form-check-input"
                      />{" "}
                      Em Promoção?
                      <i className="input-helper"></i>
                    </label>
                  </div>
                </Form.Group>
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
                <Form.Group className="col-md-12">
                  <Row>
                    <Col></Col>
                    <Col xs={6}>
                      <Button
                        type="submit"
                        className="btn btn-dark btn-rounded"
                        size="lg"
                      >
                        <MdSave style={{ fontSize: "24px" }} />
                        {props.edit ? "Salvar Produto" : "Incluir Produto"}
                      </Button>
                    </Col>
                    <Col xs={2}>
                      <Button
                        onClick={props.onModalClose}
                        className="btn btn-secondary btn-rounded align-self-right"
                      >
                        Fechar
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <div className="col grid-margin ">
          <div className="card">
            <div className="card-body">
              <Tabs defaultActiveKey="historico" id="info" className="mb-3">
                <Tab
                  eventKey="historico"
                  title="História do Produto no Cliente"
                >
                  <h4 className="card-title"></h4>
                  <Form className="form">
                    <ProductCustomerHistory
                      entidade={entidadeId}
                      produto={props.produto.codigo}
                    />
                  </Form>
                </Tab>
                <Tab eventKey="ofertas" title="Ofertas" disabled>
                  <h1>Ofertas</h1>
                </Tab>
                <Tab eventKey="extras" title="Recomendações" disabled>
                  <h1></h1>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddItemModal = (props) => {
  const backDrop = document.getElementById("backdrop-root");
  const overLay = document.getElementById("overlay-root");

  //ObterDadosVendaProduto
  const produto = {
    codigo: props.item.id,
    descricao: props.item.descricao,
    preco: 19.99,
    estoque: 100,
    desconto: 0,
    totalItem: 29.99 * 10,
    meta: 10,
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onModalClose={props.onModalClose} />,
        backDrop
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          produto={produto}
          edit={props.edit}
          onModalClose={props.onModalClose}
        />,
        overLay
      )}
    </React.Fragment>
  );
};

export default AddItemModal;
