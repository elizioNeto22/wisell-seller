import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useQuery } from 'react-apollo'
import * as queries from '../../../api/graphql/queries'

import { Form, Button, Table } from 'react-bootstrap';

import {  MdAdd, MdSearch, MdAddShoppingCart } from 'react-icons/md';

import { IoCalendarOutline } from 'react-icons/io5'


const CustomerList = () => {

  const [term,setTerm] = useState('');
  const { loading, error, data } = useQuery(queries.UNIDADES)

  return (
    <>
      <Form className="forms-sample">
        <Form.Group className="page-header">
          <h4 className="page-title">Pesquisar clientes</h4>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <Link to='/customer-list/add'>
                <Button variant="default-dark">
                    <MdAdd style={{fontSize: '24px'}}/>
                    Adicionar Carteira
                </Button>
              </Link>
            </ol>
          </nav>
        </Form.Group>

        <Form.Group>
            <div className="input-group">
                <Form.Control type="text" className="form-control"
                  placeholder="Digite ao menos 3 letras - clique no botão Pesquisar" 
                  value={term} onChange={(e) => setTerm(e.target.value)}
                />
                <div className="input-group-append">
                    <Button variant="outline-dark" 
                        onClick={(evt) => {evt.preventDefault(); } }
                    >
                        <MdSearch style={{fontSize: '24px'}}/>
                        Pesquisar
                    </Button>
                </div>
            </div>
        </Form.Group>
        <Form.Group>
            <Table striped bordered hover size="sm">
                <thead>
                  <th>#</th>
                  <th>Código</th>
                  <th>Cliente</th>
                  <th>Últ.Compra</th>
                  <th>Vlr.Últ.Compra</th>
                  <th>Próx.Compra</th>
                  <th>Lim.Crédito</th>
                  <th>Recomendação</th>
                  <th>Status</th>
                  <th>Vender</th>
                  <th>Agendar</th>
                </thead>
                <tbody>
                  {data?.unidades?.map((item) => {
                    return (
                      <tr  key={item.codigo}>
                        <td>
                          <input type="checkbox" className="form-check-input"/>
                        </td>
                        <td width="5%">{item.codigo}</td>
                        <td width="60%">{item.descricao}</td>
                        <td width="15%">{item.registro}</td>
                        <td> R$ 877.99 </td>
                        <td width="15%">{item.registro}</td>
                        <td> R$ 1500.99 </td>
                        <td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
                        <td><label className="badge badge-danger">Sem agenda</label></td>
                        <td >
                          <Link to={`/sale-page/${item.codigo}`}>
                            <Button className="btn btn-info btn-rounded">
                                <MdAddShoppingCart />
                            </Button>
                          </Link>
                        </td>
                        <td width="3%">
                          <Link to={`/agendar-cliente/${item.codigo}`}>
                            <Button variant="success" onClick={() => {}}>
                              <IoCalendarOutline />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
           </Table>
        </Form.Group>   
      </Form>
    </>
  )
}

export default CustomerList;
