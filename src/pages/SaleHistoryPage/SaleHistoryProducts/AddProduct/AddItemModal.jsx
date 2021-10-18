import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import { Form, Button, Row, Col } from "react-bootstrap";

import classes from "./AddItemModal.module.css";
import { MdSave } from "react-icons/md";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onModalClose} />;
};

const ModalOverlay = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const handleAddProduct = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h5>Produto Selecionado : {props.produto.descricao}</h5>
      </header>
      {/*<form onSubmit={handleAddProduct} className="form"> */}
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Form className="form">
                <h4 className="col-md-12 align-self-center">Dados da Venda</h4>
                <Form.Group className="col-md-12">
                  <Row>
                    <Col>
                      <label forHtml="qtde" className="form-label mb-2 mr-sm-2">
                        Qtde
                      </label>
                      <Form.Control
                        type="number"
                        value={0}
                        className="form-control mb-2 mr-sm-2"
                        id="qtde"
                      />
                    </Col>
                    <Col>
                      <label
                        forHtml="preco"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Preço
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="preco"
                        readOnly
                      />
                    </Col>
                    <Col>
                      <label
                        forHtml="desconto"
                        className="form-label mb-2 mr-sm-2"
                      >
                        %Desconto
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="desconto"
                        readOnly
                      />
                    </Col>
                    <Col>
                      <label
                        forHtml="total-item"
                        className="form-label mb-2 mr-sm-2"
                      >
                        Total Item
                      </label>
                      <Form.Control
                        type="number"
                        className="form-control mb-2 mr-sm-2"
                        id="total-item"
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
                        forHtml="estoque"
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
                      <label forHtml="giro" className="form-label mb-2 mr-sm-2">
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
                        forHtml="ult-preco"
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
                        forHtml="prod-similar"
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
                  <label for="observacao" className="form-label">
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
      </div>
    </div>
  );
};

const AddItemModal = (props) => {
  const { id } = props.id;

  const backDrop = document.getElementById("backdrop-root");
  const overLay = document.getElementById("overlay-root");
  const produto = {
    codigo: id,
    descricao: "TANOX 300ml",
    preco: 19.99,
    estoque: 100,
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
