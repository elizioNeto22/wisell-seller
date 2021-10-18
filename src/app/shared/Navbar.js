import React, { useContext } from "react";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";

import { Link } from "react-router-dom";

import AuthContext from "../../store/auth-context";

import LogoMin from "../../assets/images/logo-mini.svg";

const Navbar = () => {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };

  /*const toggleRightSidebar = () => {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }*/

  return (
    <nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a
          className="navbar-brand brand-logo-mini align-self-center d-lg-none"
          href="/"
          onClick={(evt) => evt.preventDefault()}
        >
          <img src={LogoMin} alt="logo" />
        </a>
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-icon-only")}
        >
          <i className="mdi mdi-menu"></i>
        </button>
        <Form className="ml-auto d-md-block" action="#">
          <ButtonGroup className="mr-2">
            <Link to="/sale-page">
              <Button type="button" className="btn btn-info btn-default btn-sm">
                VENDER
              </Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Link to="/recomendacao-list">
              <Button type="button" className="btn btn-info btn-default btn-sm">
                RECOMENDAÇÕES
              </Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Link to="/customer-list">
              <Button type="button" className="btn btn-info btn-default btn-sm">
                CARTEIRA
              </Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Link to="/offers">
              <Button type="button" className="btn btn-info btn-default btn-sm">
                OFERTAS
              </Button>
            </Link>
          </ButtonGroup>
          <ButtonGroup className="mr-2">
            <Link to="/offers">
              <Button type="button" className="btn btn-info btn-default btn-sm">
                MAPA CLIENTES
              </Button>
            </Link>
          </ButtonGroup>
        </Form>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item  nav-profile border-0 pl-4">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count bg-success">4</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown preview-list">
                <Dropdown.Item
                  className="dropdown-item py-3 d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <p className="mb-0 font-weight-medium float-left">
                    <Trans>You have</Trans> 4 <Trans>new notifications</Trans>{" "}
                  </p>
                  <span className="badge badge-pill badge-secondary float-right">
                    View all
                  </span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-secondary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      <Trans>Application Error</Trans>
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      <Trans>Just now</Trans>{" "}
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-secondary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      <Trans>Settings</Trans>
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      <Trans>Private message</Trans>{" "}
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-secondary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      <Trans>New user registration</Trans>
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      2 <Trans>days ago</Trans>{" "}
                    </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item  nav-profile border-0">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent">
                <img
                  className="img-xs rounded-circle"
                  src={require("../../assets/images/faces/face8.jpg")}
                  alt="Profile"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown pb-3">
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <Trans>Perfil</Trans>
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <Trans>Modificar Senha</Trans>
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <button
                    type="button"
                    className="btn btn-light btn-rounded"
                    onClick={logoutHandler}
                  >
                    Sair
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
