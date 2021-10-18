import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'

import { AiOutlineSelect } from 'react-icons/ai'

import { useEffect } from 'react'

import AuthContext from '../../../../store/auth-context'
import PesquisarFornecedor from '../../../PesquisarFornecedorPage/PesquisarFornecedor'

const SelecionarPeriodo = ({ entidadeId = 5, onSelectPeriodo }) => {
  const authCtx = useContext(AuthContext)
  const fornecedorId = authCtx.fornecedorId
  const fornecedorNome = authCtx.fornecedorNome
  const [openSearchForm, setOpenSearchForm] = useState(false)
  const [periodoSelecionado, setperiodoSelecionado] = useState('')

  useEffect(() => {
    if (fornecedorId > 0) {
      onSelectPeriodo = periodoSelecionado
      console.log('FornecedorId = ', fornecedorId)
    }
  })

  console.log(periodoSelecionado)
  return (
    <>
      <div className="card ">
        <div className="card-body">
          <h4 className="card-title">Periodo selecionado</h4>
          <Form.Group>
            <div className="input-group">
              {/* <Form.Control type="date" value={periodoSelecionado} readOnly /> */}
              <div className="input-group-append">
                <input type="date" name="periodo" id="periodo" onInput={(e) => setperiodoSelecionado(e.target.value)} />
              </div>
            </div>
          </Form.Group>
          <Form.Group>{/*Checa se clicou no botão e apresenta o formulário de selecionar cliente */}</Form.Group>
        </div>
      </div>
    </>
  )
}

export default SelecionarPeriodo
