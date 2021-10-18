import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "react-bootstrap";
import RecomendacaoDia from "./RecomendacaoDia";
import RecomendacaoMes from "./RecomendacaoMes";
import RecomendacaoSemana from "./RecomendacaoSemana";

const RecomendacaoVendas = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Recomendações de vendas </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/recomendacao-list/add">
                <Button variant="default-dark">
                  <MdAdd style={{ fontSize: "24px" }} />
                  Adicionar Recomendação
                </Button>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <RecomendacaoDia />
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <RecomendacaoSemana />
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <RecomendacaoMes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecomendacaoVendas;
