import React, { useState } from 'react'
import { useQuery } from 'react-apollo'
//import { useQuery } from "@apollo/client";

import * as queries from '../../api/graphql/queries'

import { Form, Button, Table } from 'react-bootstrap'

import { MdClose, MdSearch } from 'react-icons/md'
import styles from './PesquisarFornecedor.module.css'
import { useEffect } from 'react'
// import CustomerSearchList from './ListaVendedor'
import ListaProduto from './ListaProduto'

const PesquisarProduto = ({ entidadeId = 5, setOpenSearchForm }) => {
  const [termo, setTermo] = useState('')

  const [showList, setShowList] = useState(false)

  const onSelectProduto = () => {
    setOpenSearchForm(false)
  }

  return (
    <>
      <Form.Group className="page-header">
        <h4 className="page-title">Pesquisar produtos</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <button className={styles.button} onClick={() => setOpenSearchForm(false)}>
              <MdClose />
            </button>
          </ol>
        </nav>
      </Form.Group>
      <Form.Group>
        <div className="input-group">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Digite ao menos 3 letras - clique no botão Pesquisar"
            value={termo}
            onChange={(e) => {
              setTermo(e.target.value)
              setShowList(false)
            }}
          />
          <div className="input-group-append">
            <Button
              variant="outline-dark"
              onClick={(evt) => {
                evt.preventDefault()
                setOpenSearchForm(true)
                setShowList(true)
              }}
            >
              <MdSearch style={{ fontSize: '24px' }} />
              Pesquisar
            </Button>
          </div>
        </div>
      </Form.Group>
      {showList && termo.length >= 3 && (
        <Form.Group>
          <ListaProduto entidade={entidadeId} termo={termo} onSelectProduto={onSelectProduto} />
        </Form.Group>
      )}
    </>
  )
}

export default PesquisarProduto
