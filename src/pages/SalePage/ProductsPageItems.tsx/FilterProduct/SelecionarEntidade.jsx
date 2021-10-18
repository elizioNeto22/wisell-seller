import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";

import { AiOutlineSelect } from "react-icons/ai";

import { useEffect } from "react";

import AuthContext from "../../../../store/auth-context";
import PesquisarEntidade from "../../../PesquisarEntidadePage/PesquisarEntidade";

const SelecionarEntidade = ({ onSelectEntidade }) => {
  const [entidade, setEntidade] = useState(
    "Nenhuma entidade selecionada..."
  );
  const authCtx = useContext(AuthContext);
  const entidadeId = authCtx.entidadeId;
  const fornecedorNome = authCtx.fornecedorNome;
  const [openSearchForm, setOpenSearchForm] = useState(false);

  useEffect(() => {
    if (entidadeId > 0) {
      onSelectEntidade(entidadeId);
    }
  });

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title">Entidade selecionada</h4>
          <Form.Group>
            <div className="input-group">
              <Form.Control type="text" value={entidade} readOnly />
              <div className="input-group-append">
                <Button
                  className="btn btn-dark"
                  onClick={(evt) => {
                    evt.preventDefault();
                    setOpenSearchForm(true);
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
            {openSearchForm && (
              <PesquisarEntidade
                entidade={entidadeId}
                setOpenSearchForm={setOpenSearchForm}
              />
            )}
          </Form.Group>
        </div>
      </div>
    </>
  );
};

export default SelecionarEntidade;
