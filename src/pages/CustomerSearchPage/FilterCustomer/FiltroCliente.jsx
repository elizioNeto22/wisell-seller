import React from "react";
import { Tabs, Tab } from "react-bootstrap";

import { Form } from "react-bootstrap";

import { MdClose } from "react-icons/md";
import styles from "./FiltroCliente.module.css";

const FiltroCliente = ({ setOpenFilterForm }) => {
  return (
    <div className="forms-sample">
      <Form.Group className="page-header">
        <h4 className="page-title">Filtrar clientes</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <button
              className={styles.button}
              onClick={() => setOpenFilterForm(false)}
            >
              <MdClose />
            </button>
          </ol>
        </nav>
      </Form.Group>

      <Tabs defaultActiveKey="localizacao" id="filtro" className="mb-3">
        <Tab eventKey="localizacao" title="Localização">
          <h1>Localização</h1>
        </Tab>
        <Tab eventKey="compras" title="Sem Compras" disabled>
          <h1>Sem Compras</h1>
        </Tab>
        <Tab eventKey="novos" title="Novos">
          <h1>Sem Compras</h1>
        </Tab>
      </Tabs>

      <Form.Group className="input-group">
        <button
          className="btn btn-secondary"
          onClick={() => setOpenFilterForm(false)}
        >
          Aplicar
        </button>
      </Form.Group>
    </div>
  );
};

export default FiltroCliente;
