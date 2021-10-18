import React, { useState, useContext } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import { Form } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'
import styles from './FiltroVendas.module.css'
import SelecionarFornecedor from '../../SalePage/ProductsPageItems.tsx/FilterProduct/SelecionarFornecedor'
import SelecionarEntidade from '../../SalePage/ProductsPageItems.tsx/FilterProduct/SelecionarEntidade'
import SelecionarPeriodo from '../../SalePage/ProductsPageItems.tsx/FilterProduct/SelecionarPeriodo'
import SelecionarVendedor from '../../SalePage/ProductsPageItems.tsx/FilterProduct/SelecionarVendedor'
import SelecionarProduto from '../../SalePage/ProductsPageItems.tsx/FilterProduct/SelecionarProduto'
import SelecionarCliente from '../../SalePage/ProductsPageItems.tsx/FilterProduct/SelecionarCliente'
import ProductList from '../../SalePage/ProductsPageItems.tsx/ProductList'
import AuthContext from '../../../store/auth-context'

const FiltroVendas = ({
  setOpenFilterForm,
  onSelectFornecedor,
  onSelectPeriodo,
  onSelectVendedor,
  onSelectProduto,
  onSelectCliente,
}) => {
  const authCtx = useContext(AuthContext)
  const fornecedorId = authCtx.fornecedorId
  const entidadeId = 5
  const termo = 'cent'
  const [fornecedorCorrente, setFornecedorCorrente] = useState(0)
  const [marcaCorrente, setMarcaCorrente] = useState(0)
  const [show, setShow] = useState(false)
  console.log('FornecedorId = ', fornecedorId)

  return (
    <div className="forms-sample">
      <Form.Group className="page-header">
        <h4 className="page-title">Filtrar Vendas</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <button className={styles.button} onClick={() => setOpenFilterForm(false)}>
              <MdClose />
            </button>
          </ol>
        </nav>
      </Form.Group>

      <Tabs defaultActiveKey="entidade" id="filtro" className="mb-3">
        <Tab eventKey="fornecedor" title="Fornecedor">
          <h1>
            <SelecionarFornecedor onSelectFornecedor={onSelectFornecedor} />
          </h1>
        </Tab>
      </Tabs>

      <Form.Group className="input-group">
        <button
          className="btn btn-secondary"
          onClick={() => {
            // setOpenFilterForm(false)
            setShow(true)
          }}
        >
          Aplicar
        </button>
      </Form.Group>
      <Form.Group className="input-group">
        {show && (
          <ProductList entidade={entidadeId} termo={termo} fornecedor={fornecedorCorrente} marca={marcaCorrente} />
        )}
      </Form.Group>
    </div>
  )
}

export default FiltroVendas
