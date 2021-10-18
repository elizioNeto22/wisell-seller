import React, { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

import { MdClose, MdSearch } from 'react-icons/md'
import styles from './PesquisarFornecedor.module.css'
import ListaCliente from './ListaCliente'

const PesquisarCliente = ({ entidadeId = 5, setOpenSearchForm }) => {
  const [termo, setTermo] = useState('')

  const [showList, setShowList] = useState(false)

  const onSelectCliente = () => {
    setOpenSearchForm(false)
  }

  return (
    <>
      <Form.Group className="page-header">
        <h4 className="page-title">Pesquisar clientes</h4>
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
          <ListaCliente entidade={entidadeId} termo={termo} onSelectCliente={onSelectCliente} />
        </Form.Group>
      )}
    </>
  )
}

export default PesquisarCliente
