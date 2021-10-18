import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'

import { AiOutlineSelect } from 'react-icons/ai'

import { useEffect } from 'react'

import AuthContext from '../../../../store/auth-context'
import PesquisarProduto from '../../../PesquisarProdutoPage/PesquisarProduto'

const SelecionarProduto = ({ entidadeId = 5, onSelectProduto }) => {
  const [fornecedor, setFornecedor] = useState('Nenhum produto selecionado...')
  const authCtx = useContext(AuthContext)
  const fornecedorId = authCtx.fornecedorId
  const fornecedorNome = authCtx.fornecedorNome
  const [openSearchForm, setOpenSearchForm] = useState(false)

  useEffect(() => {
    if (fornecedorId > 0) {
      setFornecedor(fornecedorId + '-' + fornecedorNome)
      onSelectProduto = fornecedorId
      console.log('FornecedorId = ', fornecedorId)
    }
  })

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title">Produto selecionado</h4>
          <Form.Group>
            <div className="input-group">
              <Form.Control type="text" value={fornecedor} readOnly />
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
            {openSearchForm && <PesquisarProduto entidade={entidadeId} setOpenSearchForm={setOpenSearchForm} />}
          </Form.Group>
        </div>
      </div>
    </>
  )
}

export default SelecionarProduto
