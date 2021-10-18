import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MdAddShoppingCart } from "react-icons/md";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";

registerLocale("pt", pt);

const DicaVendaDia = () => {
  const [diaDicaVenda, setDiaDicaVenda] = useState(new Date());

  useEffect(() => {
    //ObterDicaVendaDia();
  }, [diaDicaVenda]);

  return (
    <>
      <div className="card-body">
        <h4 className="card-title">
          Dia:{" "}
          <DatePicker
            className="btn btn-danger md"
            selected={diaDicaVenda}
            onChange={(date) => setDiaDicaVenda(date)}
            locale="pt"
            dateFormat="dd-MM-yyyy"
          />
        </h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Produto</th>
                <th>Dica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip
                        {...props}
                        style={{ fontSize: "16px", ...props.style }}
                      >
                        'O cliente gosta de comprar este produto no final do
                        mês, a cada 60 dias da data da última compra'
                        <br />
                        Autor: Francisco Antonio
                      </Tooltip>
                    )}
                    placement="top"
                  >
                    <label variant="warning">O cliente gosta de...</label>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip
                        {...props}
                        style={{ fontSize: "16px", ...props.style }}
                      >
                        'O cliente gosta de comprar este produto no final do
                        mês, a cada 60 dias da data da última compra'
                        <br />
                        Autor: Francisco Antonio
                      </Tooltip>
                    )}
                    placement="top"
                  >
                    <label variant="warning">O cliente gosta de...</label>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip
                        {...props}
                        style={{ fontSize: "16px", ...props.style }}
                      >
                        'O cliente gosta de comprar este produto no final do
                        mês, a cada 60 dias da data da última compra'
                        <br />
                        Autor: Francisco Antonio
                      </Tooltip>
                    )}
                    placement="top"
                  >
                    <label variant="warning">O cliente gosta de...</label>
                  </OverlayTrigger>
                </td>
              </tr>
              <tr>
                <td>Distribuidora +Med </td>
                <td>Agua Inglesa</td>
                <td>
                  <OverlayTrigger
                    delay={{ hide: 450, show: 300 }}
                    overlay={(props) => (
                      <Tooltip
                        {...props}
                        style={{ fontSize: "16px", ...props.style }}
                      >
                        'O cliente gosta de comprar este produto no final do
                        mês, a cada 60 dias da data da última compra'
                        <br />
                        Autor: Francisco Antonio
                      </Tooltip>
                    )}
                    placement="top"
                  >
                    <label variant="warning">O cliente gosta de...</label>
                  </OverlayTrigger>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DicaVendaDia;
