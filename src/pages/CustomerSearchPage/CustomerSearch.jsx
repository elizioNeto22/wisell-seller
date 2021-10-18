import React, { useState } from "react";
import { useQuery } from "react-apollo";
//import { useQuery } from "@apollo/client";

import * as queries from "../../api/graphql/queries";

import { Form, Button, Table } from "react-bootstrap";

import { MdClose, MdSearch } from "react-icons/md";
import styles from "./CustomerSearch.module.css";
import { useEffect } from "react";
import CustomerSearchList from "./CustomerSearchList";
import CustomerRecommenderList from "./CustomerRecommenderList";
import FiltroCliente from "./FilterCustomer/FiltroCliente";
import { AiOutlineFilter } from "react-icons/ai";

const CustomerSearch = ({ entidadeId = 5, setOpenSearchCustomerForm }) => {
  const [termo, setTermo] = useState("");
  const [recomendacao, setRecomendacao] = useState(false);
  const [tipo, setTipo] = useState(1);
  const [openFilterForm, setOpenFilterForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const onSelectCliente = () => {
    setOpenSearchCustomerForm(false);
  };

  const handleRecomendacaoClick = () => {
    setShowList(true); //Mostrar lista de clientes
    setRecomendacao(true); //Habilitar pesquisar clientes por recomendacao
    setTipo(tipo + 1); //Incrementar Tipo até 10, buscando por tipo de recomendacao
  };

  return (
    <>
      <div className="forms-sample">
        <Form.Group className="page-header">
          <h4 className="page-title">Pesquisar clientes</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <button
                className={styles.button}
                onClick={() => setOpenSearchCustomerForm(false)}
              >
                <MdClose />
              </button>
            </ol>
          </nav>
        </Form.Group>
        <Form.Group>
          <div className="input-group">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Digite ao menos 3 letras - clique no botão Pesquisar"
              value={termo}
              onChange={(e) => {
                setTermo(e.target.value);
                setShowList(false);
              }}
            />
            <div className="input-group-append">
              <Button
                variant="outline-dark"
                onClick={(evt) => {
                  evt.preventDefault();
                  setOpenSearchCustomerForm(true);
                  setShowList(true);
                }}
              >
                <MdSearch style={{ fontSize: "24px" }} />
                Pesquisar
              </Button>
              <Button variant="outline-dark" onClick={handleRecomendacaoClick}>
                <MdSearch style={{ fontSize: "20px" }} />
                Recomendados
              </Button>
              <Button
                variant="outline-dark"
                onClick={(evt) => {
                  evt.preventDefault();
                  setOpenFilterForm(true);
                  setShowList(true);
                }}
              >
                <AiOutlineFilter style={{ fontSize: "24px" }} />
                Filtro
              </Button>
            </div>
          </div>
        </Form.Group>
        {openFilterForm && (
          <FiltroCliente
            entidade={entidadeId}
            setOpenFilterForm={setOpenFilterForm}
          />
        )}
        {showList && termo.length >= 3 && (
          <Form.Group>
            <CustomerSearchList
              entidade={entidadeId}
              termo={termo}
              onSelectCliente={onSelectCliente}
            />
          </Form.Group>
        )}
        {showList && recomendacao && (
          <CustomerRecommenderList
            entidade={entidadeId}
            tipo={tipo}
            onSelectCliente={onSelectCliente}
          />
        )}
        {showList && !recomendacao && termo.length < 3 && (
          <Form.Group>
            <h5 style={{ color: "red" }}>
              Digite mais 3 ou mais letras para pesquisar!
            </h5>
          </Form.Group>
        )}
      </div>
    </>
  );
};

export default CustomerSearch;
