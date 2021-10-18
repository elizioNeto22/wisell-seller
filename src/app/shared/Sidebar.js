import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";

import LogoMin from "../../assets/images/logo-mini.svg";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="/">
            <img src={require("../../assets/images/logo.svg")} alt="logo" />
          </a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="/">
            <img src={LogoMin} alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>Painel de Controle</Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">
                <Trans>Vendas</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/sale-monitor")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/sale-monitor"
                  >
                    <Trans>Monitor de Vendas</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/sale-page")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/sale-page"
                  >
                    <Trans>Vender</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/sale-history")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/sale-history"
                  >
                    <Trans>Histórico</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/form-elements")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.formElementsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formElementsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">
                <Trans>Recomendações</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/recomendacao-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/recomendacao-list"
                  >
                    <Trans>Gerenciamento</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/recomendacao-list/add")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/recomendacao-list/add"
                  >
                    <Trans>Nova</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/form-elements/basic-elements")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/form-elements/basic-elements"
                  >
                    <Trans>forms</Trans>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/basic-ui/buttons")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/buttons"
                  >
                    <Trans>button</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/basic-ui/dropdowns")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/basic-ui/dropdowns"
                  >
                    <Trans>dropdown</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/tables") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.tablesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("tablesMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">
                <Trans>Agenda de Vendas</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/agenda-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/agenda-list"
                  >
                    <Trans>Agenda</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/agenda-list/add")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/agenda-list/add"
                  >
                    <Trans>Nova Agenda</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/agenda-list/add")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/agenda-list/add"
                  >
                    <Trans>Roteirização</Trans>
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/tables/basic-table")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/tables/basic-table"
                  >
                    <Trans>tables</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/icons") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">
                <Trans>Carteira</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/customer-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/customer-list"
                  >
                    Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/customer-list/add")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/customer-list/add"
                  >
                    Adicionar Carteira
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">
                <Trans>Colaborações</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/colab-manager")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/colab-manager"
                  >
                    Conversas
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/colab-manager/history")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/colab-manager/talks"
                  >
                    Histórico
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/colab-manager/contacts")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/colab-manager/contacts"
                  >
                    Contatos
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/colab-manager/channels")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/colab-manager/channels"
                  >
                    Canais
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/colab-manager/groups")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/colab-manager/groups"
                  >
                    Grupos
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/charts/chart-js")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/charts/chart-js"
                  >
                    Chart Js
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/user-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">
                <Trans>Produtos</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/produtos-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/produtos-list"
                  >
                    <Trans>Histórico vendas</Trans>
                  </Link>
                </li>

                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/login-1")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/login-1"
                  >
                    <Trans>Login</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/register-1")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/register-1"
                  >
                    <Trans>Register</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/error-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-information-outline menu-icon"></i>
              <span className="menu-title">
                <Trans>Dicas de Vendas</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/dica-venda-list")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/dica-venda-list"
                  >
                    Gerenciamento
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/dica-venda-list/add")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/dica-venda-list/add"
                  >
                    Nova
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://www.wisell.com.br"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="mdi mdi-file-outline menu-icon"></i>
              <span className="menu-title">
                <Trans>Ajuda</Trans>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
