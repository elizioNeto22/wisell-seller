import React from 'react'

import { Form } from 'react-bootstrap';

import CustomerList from './CustomerList/CustomerList';

const SalePage = () => {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Carteira de Clientes </h3>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form>
                <CustomerList/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
)
}

export default SalePage
