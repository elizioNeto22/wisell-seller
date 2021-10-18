import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);

const AgendaDia = () => {
  const [diaAgenda, setDiaAgenda] = useState(new Date());

  useEffect(() => {
    //ObterAgendaDia();
  }, [diaAgenda]);

  return (
    <>
      <div className="card-body">
        <h4 className="card-title">
          Dia:{" "}
          <DatePicker
            className="btn btn-danger md"
            selected={diaAgenda}
            onChange={(date) => setDiaAgenda(date)}
            locale="pt"
            dateFormat="dd-MM-yyyy"
          />
        </h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Data</th>
                <th>Cliente</th>
                <th>Hora</th>
                <th>Status</th>
                <th> Vender </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>15:30</td>
                <td>
                  <label className="badge badge-success">Finalizada</label>
                </td>
                <td>
                  <Link to={`/sale-page/${10}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +JM </td>
                <td>16:30</td>
                <td>
                  <label className="badge badge-secondary">Em execução</label>
                </td>
                <td>
                  <Link to={`/sale-page/${11}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>17:00</td>
                <td>
                  <label className="badge badge-danger">Pendente</label>
                </td>
                <td>
                  <Link to={`/sale-page/${12}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +JM </td>
                <td>17:30</td>
                <td>
                  <label className="badge badge-warning">A fazer</label>
                </td>
                <td>
                  <Link to={`/sale-page/${13}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AgendaDia;
