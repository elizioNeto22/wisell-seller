import React from "react";

import { Form } from "react-bootstrap";
import { Line, Bar, Radar } from "react-chartjs-2";

//import SelectCustomer from "./ProductsPageItems.tsx/SelectCustomer";
import ProductSearch from "../SalePage/ProductsPageItems.tsx/ProductSearch";
//import OrderResume from "./Order/Resume/OrderResume";
//import OrderItems from "./Order/Items/OrderItems";
//import OrderFunctions from "./Order/Functions/OrderFunctions";

const Produtos = () => {
  const marketingOverviewData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "OVERDUE",
        data: [145, 238, 148, 293, 242, 235, 256, 334],
        backgroundColor: "#826af9",
        borderColor: "#826af9",
        borderWidth: 0,
      },
      {
        label: "SNOOZED",
        data: [330, 380, 230, 400, 309, 430, 340, 310],
        borderColor: "#9e86ff",
        borderWidth: 0,
      },
      {
        label: "COMPLETED",
        data: [375, 440, 284, 450, 386, 480, 400, 365],
        backgroundColor: "#d0aeff",
        borderColor: "#d0aeff",
        borderWidth: 0,
      },
      {
        label: "PENDING",
        data: [425, 480, 324, 490, 426, 520, 440, 405],
        backgroundColor: "#f7d2ff",
        borderColor: "#f7d2ff",
        borderWidth: 0,
      },
    ],
  };
  const marketingOverviewOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 20,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            max: 400,
            display: true,
            beginAtZero: true,
            fontColor: "#b9b8b8",
            stepSize: 100,
          },
          gridLines: {
            display: false,
            color: "#dde4eb",
            zeroLineColor: "#dde4eb",
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#b9b8b8",
            color: "#dde4eb",
            zeroLineColor: "#dde4eb",
          },
          gridLines: {
            display: true,
            color: "#dde4eb",
            zeroLineColor: "#dde4eb",
          },
          barPercentage: 0.2,
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Produtos </h3>
      </div>
      <div className="row">
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Histórico de Vendas</h4>
              <form>
                <ProductSearch />
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">
                Resumo Venda Produto (Últ. 12 meses)
              </h4>
              <form className="forms-sample">
                <div className="d-flex align-items-end">
                  <h3 className="mb-0 font-weight-semibold">36.231,00</h3>
                  <p className="mb-0 font-weight-medium mr-2 ml-2 mb-1">R$</p>
                  <p className="mb-0 text-success font-weight-semibold mb-1">
                    (+1.37%)
                  </p>
                </div>
                <Bar
                  data={marketingOverviewData}
                  options={marketingOverviewOptions}
                  height={100}
                  id="marketingOverviewChart1"
                />

                <h4 className="card-title mb-0">
                  Ranking clientes que mais compraram (Últ.12 meses)
                </h4>
                <div className="d-flex mt-3 py-2 border-bottom">
                  <img
                    className="img-sm rounded-circle"
                    src={require("../../assets/images/faces/face3.jpg")}
                    alt="profile"
                  />
                  <div className="wrapper ml-2">
                    <p className="mb-n1 font-weight-semibold">
                      DISTRIBUIDORA VENDEMAIS
                    </p>
                    <small>Qtde: 543</small>
                  </div>
                  <small className="text-muted ml-auto">
                    Últ.Compra: 05/03/2021
                  </small>
                </div>
                <div className="d-flex py-2 border-bottom">
                  <span className="img-sm rounded-circle bg-warning text-white text-avatar">
                    ST
                  </span>
                  <div className="wrapper ml-2">
                    <p className="mb-n1 font-weight-semibold">
                      SUPERMERCADOS TOP
                    </p>
                    <small>Qtde: 162</small>
                  </div>
                  <small className="text-muted ml-auto">
                    Últ.Compra: 03/05/2021
                  </small>
                </div>
                <div className="d-flex py-2 border-bottom">
                  <img
                    className="img-sm rounded-circle"
                    src={require("../../assets/images/faces/face4.jpg")}
                    alt="profile"
                  />
                  <div className="wrapper ml-2">
                    <p className="mb-n1 font-weight-semibold">Indústria FAZ</p>
                    <small>Qtde: 154</small>
                  </div>
                  <small className="text-muted ml-auto">
                    Últ.Compra: 03/06/2021
                  </small>
                </div>
                <div className="d-flex pt-2">
                  <span className="img-sm rounded-circle bg-success text-white text-avatar">
                    OB
                  </span>
                  <div className="wrapper ml-2">
                    <p className="mb-n1 font-weight-semibold">Olive Bridges</p>
                    <small>Qtde: 63</small>
                  </div>
                  <small className="text-muted ml-auto">
                    Últ.Compra: 03/07/2021
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Produtos;
