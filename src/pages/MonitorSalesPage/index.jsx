import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineFilter } from 'react-icons/ai'
import FiltroVendas from './FilterCustomer/FiltroVendas'
import VendasTop from './VendasTop/VendasTop'
import VendasList from './VendasList/VendasList'

const MonitorSalesPage = () => {
  const [openFilterForm, setOpenFilterForm] = useState(false)
  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Monitor de Pedidos de Venda </h3>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="card-body-header" style={{ display: 'flex', alignItems: 'center' }}>
                <h4 className="card-title">Pedidos de Venda</h4>
                <Button
                  variant="outline-dark"
                  onClick={(evt) => {
                    evt.preventDefault()
                    setOpenFilterForm(true)
                  }}
                >
                  <AiOutlineFilter style={{ fontSize: '24px' }} />
                  Filtro
                </Button>
              </div>
              {openFilterForm && <FiltroVendas entidade={5} setOpenFilterForm={setOpenFilterForm} />}
            </div>
            <VendasTop />
            <VendasList />
          </div>
        </div>
      </div>
    </>
  )
}

export default MonitorSalesPage
