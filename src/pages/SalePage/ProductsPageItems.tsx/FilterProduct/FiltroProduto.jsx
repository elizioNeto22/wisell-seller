import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import SelecionarFornecedor from './SelecionarFornecedor'

import { Form } from 'react-bootstrap'

import { MdClose } from 'react-icons/md'
import styles from './FiltroProduto.module.css'
import MaisFiltro from './MaisFiltro'

const FiltroProduto = ({ setOpenFilterProductForm, onSelectFornecedor, onSelectMarca }) => {
  return (
    <div className="forms-sample">
      <Form.Group className="page-header">
        <h4 className="page-title">Filtrar produtos</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <button className={styles.button} onClick={() => setOpenFilterProductForm(false)}>
              <MdClose />
            </button>
          </ol>
        </nav>
      </Form.Group>

      <Tabs defaultActiveKey="fornecedor" id="filtro" className="mb-3">
        <Tab eventKey="fornecedor" title="Fornecedores">
          <SelecionarFornecedor onSelectFornecedor={onSelectFornecedor} />
        </Tab>
        <Tab eventKey="ofertas" title="Ofertas" disabled>
          <h1>Ofertas</h1>
        </Tab>
        <Tab eventKey="mais" title="Mais">
          <MaisFiltro onSelectMarca={onSelectMarca} />
        </Tab>
      </Tabs>

      <Form.Group className="input-group">
        <button className="btn btn-secondary" onClick={() => setOpenFilterProductForm(false)}>
          Aplicar
        </button>
      </Form.Group>
    </div>
  )
}

export default FiltroProduto
