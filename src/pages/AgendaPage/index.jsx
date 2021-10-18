import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button } from "react-bootstrap";
import AgendaDia from "./AgendaDia";
import AgendaMes from "./AgendaMes";
import AgendaSemana from "./AgendaSemana";

const AgendaVendas = () => {
  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Agenda de vendas </h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/agenda-list/add">
                <Button variant="default-dark">
                  <MdAdd style={{ fontSize: "24px" }} />
                  Adicionar Agenda
                </Button>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <AgendaDia />
          </div>
        </div>
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <AgendaSemana />
          </div>
        </div>
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <AgendaMes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaVendas;
