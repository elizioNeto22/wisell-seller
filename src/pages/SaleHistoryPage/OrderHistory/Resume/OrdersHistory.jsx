import React from "react";

import { Form, Button, Row, Col, ProgressBar } from "react-bootstrap";
import { Line, Bar, Radar } from "react-chartjs-2";

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

const OrdersHistory = (props) => {
  return (
    <React.Fragment>
      <div className="row d-flex">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
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
                  height={60}
                  id="marketingOverviewChart1"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrdersHistory;
