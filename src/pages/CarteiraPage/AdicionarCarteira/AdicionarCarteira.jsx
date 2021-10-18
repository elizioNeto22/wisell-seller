import React from 'react'

import { Form } from 'react-bootstrap';
import CarteiraFunctions from './CarteiraFunctions';

import CustomerList from '../CustomerList/CustomerList';

const AdicionarCarteira = () => {
  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Clientes a Adicionar na Carteira </h3>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <form>
                <CustomerList/>
                <CarteiraFunctions />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
)
}

export default AdicionarCarteira
