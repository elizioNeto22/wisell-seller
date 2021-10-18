import React, { useState } from "react";

//*ICONES*/
import { IoSaveOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";

import { Form, Button, ButtonGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from "date-fns/locale/pt";

registerLocale("pt", pt);

const CadastroAgenda = () => {
  const [diaAgenda, setDiaAgenda] = useState(new Date());

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> Nova agenda </h3>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Agendamento</h4>
              <form className="form-sample">
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Cliente</label>
                      <div className="col-sm-9">
                        <select className="form-control">
                          <option>Cliente 1</option>
                          <option>Cliente 2</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-3">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Data</label>
                      <div className="col-sm-9">
                        <DatePicker
                          className="form-control w-100"
                          selected={diaAgenda}
                          onChange={(date) => setDiaAgenda(date)}
                          locale="pt"
                          dateFormat="dd-MM-yyyy"
                        />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-3">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Hora</label>
                      <div className="col-sm-9">
                        <DatePicker
                          className="form-control w-100"
                          selected={diaAgenda}
                          onChange={(date) => setDiaAgenda(date)}
                          locale="pt"
                          showTimeSelectOnly
                          showTimeInput
                          dateFormat="HH:MM"
                        />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Prioridade
                      </label>
                      <div className="col-sm-9">
                        <select className="form-control">
                          <option>Prio1</option>
                          <option>Prio2</option>
                          <option>Prio3</option>
                          <option>Prio4</option>
                        </select>
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <p className="card-description"> Notificação </p>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Email Cliente
                      </label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Email Extra
                      </label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Email Equipe
                      </label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Email Gerente
                      </label>
                      <div className="col-sm-9">
                        <Form.Control type="text" />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">
                        Observação
                      </label>
                      <div className="col-sm-12 lg">
                        <Form.Control as="textarea" rows={5} />
                      </div>
                    </Form.Group>
                  </div>
                </div>
                <div className="form-check">
                  <label className="form-check-label text-muted">
                    <input type="checkbox" className="form-check-input" />
                    <i className="input-helper"></i>
                    Notificar apenas no dia!
                  </label>
                </div>
                <div className="row">
                  <div className="col-md-10"></div>
                  <div className="col-md-2">
                    <Form.Group className="row">
                      <ButtonGroup className="mr-2">
                        <Button
                          type="button"
                          className="btn btn-light btn-default btn-sm"
                        >
                          <FcCancel fontSize="20px" /> CANCELAR
                        </Button>
                      </ButtonGroup>
                      <Button type="submit" className="btn btn-success btn-md">
                        <IoSaveOutline fontSize="20px" /> SALVAR
                      </Button>
                    </Form.Group>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroAgenda;
