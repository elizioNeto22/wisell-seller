import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";
registerLocale("pt", pt);

const RecomendacaoDia = () => {
  const [diaRecomendacao, setDiaRecomendacao] = useState(new Date());

  useEffect(() => {
    //ObterRecomendacaoDia();
  }, [diaRecomendacao]);

  return (
    <>
      <div className="card-body">
        <h4 className="card-title">
          Dia:{" "}
          <DatePicker
            className="btn btn-danger md"
            selected={diaRecomendacao}
            onChange={(date) => setDiaRecomendacao(date)}
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
                <th>Produto</th>
                <th>Qtde</th>
                <th>Recomendador</th>
                <th>Status</th>
                <th> Vender </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 May 2017</td>
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>50 cx</td>
                <td>Francisco Antonio</td>
                <td>
                  <label className="badge badge-success">Nova</label>
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
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>50 cx</td>
                <td>Francisco Antonio</td>
                <td>
                  <label className="badge badge-success">Nova</label>
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
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>50 cx</td>
                <td>Francisco Antonio</td>
                <td>
                  <label className="badge badge-success">Nova</label>
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
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>50 cx</td>
                <td>Francisco Antonio</td>
                <td>
                  <label className="badge badge-success">Nova</label>
                </td>
                <td>
                  <Link to={`/sale-page/${10}`}>
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

export default RecomendacaoDia;
