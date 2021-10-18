import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "react-bootstrap";
import DicaVendaDia from "./DicaVendaDia";
import DicaVendaSemana from "./DicaVendaSemana";
import DicaVendaMes from "./DicaVendaMes";

const DicaVenda = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Dicas de vendas </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/dica-venda-list/add">
                <Button variant="default-dark">
                  <MdAdd style={{ fontSize: "24px" }} />
                  Adicionar Dica de Venda
                </Button>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <DicaVendaDia />
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <DicaVendaSemana />
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <DicaVendaMes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicaVenda;
