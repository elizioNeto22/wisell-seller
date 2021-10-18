import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);

const AgendaMes = () => {
  const [mesAgenda, setMesAgenda] = useState(new Date());

  useEffect(() => {
    //ObterAgendaDia();
  }, [mesAgenda]);

  return (
    <>
      <div className="card-body">
        <h4 className="card-title">
          Mês:{" "}
          <DatePicker
            className="btn btn-secondary md"
            selected={mesAgenda}
            onChange={(date) => setMesAgenda(date)}
            locale="pt"
            dateFormat="MM-yyyy"
          />
        </h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th> Data </th>
                <th> Cliente </th>
                <th> Hora </th>
                <th> Últ.Compra </th>
                <th> Valor </th>
                <th> Status </th>
                <th> Vender </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>15:30</td>
                <td>15/03/2021</td>
                <td>R$ 10017,32</td>
                <td>
                  <label className="badge badge-success">Finalizada</label>
                </td>
                <td>
                  <Link to={`/sale-page/${13}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>15:30</td>
                <td>15/03/2021</td>
                <td>R$ 10017,32</td>
                <td>
                  <label className="badge badge-success">Finalizada</label>
                </td>
                <td>
                  <Link to={`/sale-page/${13}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>15:30</td>
                <td>15/03/2021</td>
                <td>R$ 10017,32</td>
                <td>
                  <label className="badge badge-warning">A Fazer</label>
                </td>
                <td>
                  <Link to={`/sale-page/${13}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>15:30</td>
                <td>15/03/2021</td>
                <td>R$ 10017,32</td>
                <td>
                  <label className="badge badge-danger">Pendente</label>
                </td>
                <td>
                  <Link to={`/sale-page/${13}`}>
                    <Button className="btn btn-info btn-rounded">
                      <MdAddShoppingCart />
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>15:30</td>
                <td>15/03/2021</td>
                <td>R$ 10017,32</td>
                <td>
                  <label className="badge badge-success">Finalizada</label>
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

export default AgendaMes;
