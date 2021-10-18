import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'

import { AiOutlineSelect } from 'react-icons/ai'

import { useEffect } from 'react'

import AuthContext from '../../../../store/auth-context'
import PesquisarCliente from '../../../PesquisarClientePage/PesquisarCliente'

const SelecionarCliente = ({ entidadeId = 5, onSelectCliente }) => {
  const [cliente, setCliente] = useState('Nenhum cliente selecionado...')
  const authCtx = useContext(AuthContext)
  const fornecedorId = authCtx.fornecedorId
  const fornecedorNome = authCtx.fornecedorNome
  const [openSearchForm, setOpenSearchForm] = useState(false)

  useEffect(() => {
    if (fornecedorId > 0) {
      setCliente(fornecedorId + '-' + fornecedorNome)
      onSelectCliente = fornecedorId
      console.log('fornecedorId = ', fornecedorId)
    }
  })

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title">Cliente selecionado</h4>
          <Form.Group>
            <div className="input-group">
              <Form.Control type="text" value={cliente} readOnly />
              <div className="input-group-append">
                <Button
                  className="btn btn-dark"
                  onClick={(evt) => {
                    evt.preventDefault()
                    setOpenSearchForm(true)
                  }}
                >
                  <AiOutlineSelect style={{ fontSize: '24px' }} />
                  Selecionar
                </Button>
              </div>
            </div>
          </Form.Group>
          <Form.Group>
            {/*Checa se clicou no botão e apresenta o formulário de selecionar cliente */}
            {openSearchForm && <PesquisarCliente entidade={entidadeId} setOpenSearchForm={setOpenSearchForm} />}
          </Form.Group>
        </div>
      </div>
    </>
  )
}

export default SelecionarCliente
