import React, { Component } from "react";
import { Line, Bar, Radar } from "react-chartjs-2";

import { ProgressBar, Dropdown, Button } from "react-bootstrap";
import GaugeChart from "react-gauge-chart";
import { VectorMap } from "react-jvectormap";
import { MdFilter } from "react-icons/md";
import { AiOutlineFilter } from "react-icons/ai";

const mapData = {
  CN: 100000,
  IN: 9900,
  SA: 86,
  EG: 70,
  SE: 0,
  FI: 0,
  FR: 0,
  US: 20,
};

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class VendasTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totaltransactionChartData: {},
      areaOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
          xAxes: [
            {
              display: false,
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
          line: {
            tension: 0,
          },
        },
        stepsize: 100,
      },
      salesStaticsOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        elements: {
          point: {
            radius: 3,
          },
          line: {
            tension: 0,
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        legend: false,
        scales: {
          xAxes: [
            {
              display: false,
              ticks: {
                display: false,
                beginAtZero: false,
              },
              gridLines: {
                drawBorder: false,
                color: "#f8f8f8",
                zeroLineColor: "#f8f8f8",
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                max: 200,
                min: 0,
                stepSize: 50,
                fontColor: "#8b9298",
                beginAtZero: false,
              },
              gridLines: {
                color: "#f8f8f8",
                zeroLineColor: "#f8f8f8",
                display: true,
                drawBorder: false,
              },
            },
          ],
        },
      },
      netProfitOptions: {
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 20,
            display: false,
          },
          pointLabels: {
            fontSize: 14,
            fontColor: "#6c757c",
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
          angleLines: {
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
          gridLines: {
            color: "#f3f3f3",
            zeroLineColor: "#f3f3f3",
          },
        },
        legend: false,
      },
      totaltransactionChartOptions: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        layout: {
          padding: {
            left: -10,
            right: 0,
            top: 0,
            bottom: -10,
          },
        },
        legend: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
              ticks: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
              ticks: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
              },
            },
          ],
        },
      },
      todos: [
        {
          id: 1,
          task: "Pick up kids from school",
          isCompleted: false,
        },
        {
          id: 2,
          task: "Prepare for presentation",
          isCompleted: false,
        },
        {
          id: 3,
          task: "Print Statements",
          isCompleted: false,
        },
        {
          id: 4,
          task: "Create invoice",
          isCompleted: false,
        },
        {
          id: 5,
          task: "Call John",
          isCompleted: false,
        },
      ],
      inputValue: "",
      active: "",
    };
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  changeChartOneData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }

    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170];
    var newData1 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  changeChartTwoData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 145, 155, 60, 75, 65, 130, 110, 145, 149, 170];
    var newData1 = [0, 70, 52, 90, 25, 20, 40, 70, 49, 94, 110, 135];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    console.log("this is:", newDataSet.data);
    console.log("this is:", newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  changeChartThreeData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 75, 65, 130, 110, 145, 155, 60, 145, 149, 170];
    var newData1 = [0, 70, 52, 94, 110, 135, 90, 25, 20, 40, 70, 49];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    console.log("this is:", newDataSet.data);
    console.log("this is:", newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  changeChartFourData = (e) => {
    const clicked = e.target.id;
    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
    var oldDataSet = this.state.datasets[0];
    var oldDataSet1 = this.state.datasets[1];
    var newData = [130, 145, 65, 130, 75, 145, 149, 170, 110, 155, 60];
    var newData1 = [0, 70, 90, 25, 40, 20, 94, 110, 135, 70, 49, 52];
    var newDataSet = {
      ...oldDataSet,
    };
    var newDataSet1 = {
      // ...oldDataSet,
      ...oldDataSet1,
    };

    newDataSet.data = newData;
    newDataSet1.data = newData1;

    // console.log('this is:', oldDataSet.data);
    console.log("this is:", newDataSet.data);
    console.log("this is:", newDataSet1.data);
    var newState = {
      // ...data,
      datasets: [newDataSet, newDataSet1],
    };
    try {
      this.setState(newState);
    } catch (e) {
      throw Error(e);
    }
  };
  statusChangedHandler(event, id) {
    const todo = { ...this.state.todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
      todos: todos,
    });
  }

  addTodo(event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: this.state.inputValue,
      isCompleted: false,
    });

    this.setState({
      todos: todos,
      inputValue: "",
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos,
    });
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  usersDoughnutChartData = {
    datasets: [
      {
        data: [80, 34, 100],
        backgroundColor: ["#19d895", "#2196f3", "#dde4eb"],
        borderColor: ["#19d895", "#2196f3", "#dde4eb"],
      },
    ],
    labels: ["Request", "Email"],
  };

  usersDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };

  amountDueBarData = {
    labels: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
    ],
    datasets: [
      {
        label: "Profit",
        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
        backgroundColor: [
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
        ],
        borderColor: [
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
        ],
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  amountDueBarOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0.03)",
          },
        },
      ],
      xAxes: [
        {
          display: false,
          barPercentage: 0.4,
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };
  totalRevenueData = {
    labels: [
      "Day01",
      "Day02",
      "Day03",
      "Day04",
      "Day05",
      "Day06",
      "Day07",
      "Day08",
      "Day09",
      "Day10",
      "Day11",
      "Day12",
      "Day13",
      "Day14",
      "Day15",
      "Day16",
      "Day17",
      "Day18",
      "Day19",
      "Day20",
      "Day21",
      "Day22",
      "Day23",
      "Day24",
      "Day25",
      "Day26",
      "Day27",
      "Day28",
      "Day29",
      "Day30",
      "Day31",
      "Day32",
      "Day33",
      "Day34",
      "Day35",
      "Day36",
      "Day37",
      "Day38",
      "Day39",
      "Day40",
      "Day41",
      "Day42",
      "Day43",
      "Day44",
      "Day45",
      "Day46",
      "Day47",
      "Day48",
      "Day49",
      "Day50",
      "Day51",
      "Day52",
      "Day53",
      "Day54",
      "Day55",
      "Day56",
      "Day57",
      "Day58",
      "Day59",
      "Day60",
      "Day61",
      "Day62",
      "Day63",
      "Day64",
      "Day65",
      "Day66",
      "Day67",
      "Day68",
      "Day69",
      "Day70",
      "Day71",
      "Day72",
      "Day73",
      "Day74",
      "Day75",
      "Day76",
      "Day77",
      "Day78",
      "Day79",
      "Day80",
      "Day81",
      "Day82",
    ],
    datasets: [
      {
        label: "Total Revenue",
        data: [
          56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58, 59, 57, 55,
          56, 54, 52, 49, 48, 50, 50, 46, 45, 49, 50, 52, 53, 52, 55, 54, 53,
          56, 55, 56, 55, 54, 55, 57, 58, 56, 55, 56, 57, 58, 59, 58, 57, 55,
          53, 52, 55, 57, 55, 54, 52, 55, 57, 56, 57, 58, 59, 58, 59, 57, 56,
          55, 57, 58, 59, 60, 62, 60, 59, 58, 57, 56, 57, 56, 58, 59,
        ],
        borderColor: "#9B86F1",
        backgroundColor: "rgba(255,255,255,0.2)",
        borderWidth: 3,
        fill: "origin",
      },
    ],
  };
  totalRevenueOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          display: false,
        },
      ],
      xAxes: [
        {
          display: false,
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
      line: {
        tension: 0,
      },
    },
    stepsize: 100,
  };

  realTimeStatisticsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Profit",
        data: [330, 380, 230, 400, 309, 530, 340],
        backgroundColor: "#0f5bff",
        borderColor: "#0f5bff",
        borderWidth: 0,
      },
      {
        label: "Target",
        data: [600, 600, 600, 600, 600, 600, 600],
        backgroundColor: "#e5e9f2",
        borderColor: "#e5e9f2",
        borderWidth: 0,
      },
    ],
  };
  realTimeStatisticsOptions = {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        left: 0,
        right: 25,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            display: false,
            beginAtZero: true,
            fontColor: "#f3f3f3",
          },
          gridLines: {
            display: false,
            color: "#f3f3f3",
            zeroLineColor: "0,0,0,0",
          },
          barPercentage: 0.5,
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

  marketingOverviewData = {
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
  marketingOverviewOptions = {
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

  componentDidMount() {
    var Datas = [60, 75, 65, 130, 130, 145, 110, 145, 155, 149, 170];
    var Datas1 = [0, 25, 20, 40, 70, 52, 49, 90, 70, 94, 110, 135];

    const totaltransactionData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sessions",
          data: [320, 280, 300, 280, 300, 270, 350],
          borderColor: "#fa394e",
          borderWidth: 0,
          pointBackgroundColor: "#fa394e",
          pointRadius: 7,
          pointBorderWidth: 3,
          pointBorderColor: "#fff",
          pointHoverRadius: 7,
          pointHoverBackgroundColor: "#fa394e",
          pointHoverBorderColor: "#fa394e",
          pointHoverBorderWidth: 2,
          pointHitRadius: 7,
        },
      ],
    };
    this.setState({ totaltransactionChartData: totaltransactionData });
  }

  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center pb-2">
                          <div className="dot-indicator bg-danger mr-2"></div>
                          <p className="mb-0">Vendas do Per??odo</p>
                        </div>
                        <h4 className="font-weight-semibold">R$7,590</h4>
                        <ProgressBar variant="danger" now={80} />
                      </div>
                      <div className="col-md-6 mt-4 mt-md-0">
                        <div className="d-flex align-items-center pb-2">
                          <div className="dot-indicator bg-success mr-2"></div>
                          <p className="mb-0">
                            Clientes Positivados no per??odo
                          </p>
                        </div>
                        <h4 className="font-weight-semibold">460</h4>
                        <ProgressBar variant="success" now={50} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card average-price-card">
                <div className="card text-white">
                  <div className="card-body">
                    <div className="d-flex justify-content-between pb-2 align-items-center">
                      <h2 className="font-weight-semibold mb-0">R$ 4,624</h2>
                      <div className="icon-holder">
                        <Button className="btn btn-light btn-md">
                          <AiOutlineFilter fontSize="20px" />
                          Filtrar
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h5 className="font-weight-semibold mb-0">
                        Valor M??dio no per??odo
                      </h5>
                      <p className="text-white mb-0">
                        Per??odo: 01/jan/2021 a 31/jul/2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VendasTop;
