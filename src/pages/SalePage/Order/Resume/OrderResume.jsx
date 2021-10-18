import React from "react";

import { Form, ProgressBar } from "react-bootstrap";
const OrderResume = ({ pedido }) => {
  return (
    <React.Fragment>
      <div className="row d-flex">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Form className="form">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nr.Pedido</th>
                      <th>Status</th>
                      <th>Valor</th>
                      <th>Vlr(%)</th>
                      <th>Itens</th>
                      <th>Itens(%)</th>
                      <th>Perf($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{pedido.id}</td>
                      <td>
                        <label className="badge badge-warning">
                          {pedido.status.descricao}
                        </label>
                      </td>
                      <td> R$ {pedido.valorPedido} </td>
                      <td className="text-danger">
                        {" "}
                        0% <i className="mdi mdi-arrow-down"></i>
                      </td>
                      <td> {pedido.qtdeItens} </td>
                      <td className="text-danger">
                        {" "}
                        0% <i className="mdi mdi-arrow-down"></i>
                      </td>
                      <td>
                        <ProgressBar variant="warning" now={1} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderResume;
