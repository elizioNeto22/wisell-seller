import React, { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { MdSearch } from 'react-icons/md'
import ProductList from './ProductList'
import { AiOutlineFilter } from 'react-icons/ai'
import RecommenderList from './Recomendacao/RecommenderList'
import AuthContext from '../../../store/auth-context'
import { useEffect } from 'react'
import FiltroProduto from './FilterProduct/FiltroProduto'

const ProductSearch = ({ entidadeId = 5 }) => {
  const [termo, setTermo] = useState('')
  const [fornecedorCorrente, setFornecedorCorrente] = useState(0)
  const [marcaCorrente, setMarcaCorrente] = useState(0)
  const [tipo, setTipo] = useState(1)
  const [atributo, setAtributo] = useState(0)
  const [show, setShow] = useState(false)
  const [recomendacao, setRecomendacao] = useState(false)
  const [openFilterProductForm, setOpenFilterProductForm] = useState(false)

  const authCtx = useContext(AuthContext)
  const clienteId = authCtx.clienteId
  const topN = 10 //Obter do Filtro

  const handlePesquisarClick = () => {
    setShow(false)
    setRecomendacao(false)
    if (termo.length >= 3) {
      setShow(true)
    }
  }

  const handleRecomendacaoClick = () => {
    if (clienteId > 0) {
      setShow(true) //Mostrar lista de produtos pesquisados
      setRecomendacao(true) //Habilitar pesquisar produtos por recomendacao
      setTipo(tipo + 1) //Incrementar Tipo até 10, buscando por tipo de recomendacao
    }
  }

  const onSelectFornecedor = (id) => {
    setFornecedorCorrente(id)
  }

  const onSelectMarca = (id) => {
    setMarcaCorrente(id)
  }

  useEffect(() => {
    if (tipo > 4)
      //Maximos de tipos de recomendação
      setTipo(1)

    switch (tipo) {
      case (0, 1): {
        setAtributo(clienteId)
        break
      }
      case 2: {
        setAtributo(topN)
        break
      }
      case 3: {
        setAtributo(clienteId + ';' + topN)
        break
      }
      case 4: {
        setAtributo(clienteId + ';' + topN)
        break
      }
    }
  }, [clienteId, setTipo, tipo])

  console.log('fornecedorCorrente: ', fornecedorCorrente)
  console.log('marcaCorrente: ', marcaCorrente)
  console.log('termo: ', termo)
  console.log('entidadeId: ', entidadeId)
  return (
    <>
      <Form.Group className="input-group">
        <Form.Control
          type="text"
          className="form-control"
          size="sm"
          id="produto"
          placeholder="Pesquisar Produtos...Digite ao menos 3 letras para pesquisar"
          value={termo}
          onChange={(e) => {
            setTermo(e.target.value)
            setShow(false)
          }}
        />
        <div className="input-group-append">
          <Button variant="outline-dark" onClick={handlePesquisarClick}>
            <MdSearch style={{ fontSize: '20px' }} />
            Pesquisar
          </Button>
          <Button variant="outline-dark" onClick={handleRecomendacaoClick}>
            <MdSearch style={{ fontSize: '20px' }} />
            Recomendados
          </Button>
          <Button
            variant="outline-dark"
            onClick={(evt) => {
              evt.preventDefault()
              setOpenFilterProductForm(true)
              setShow(true)
            }}
          >
            <AiOutlineFilter style={{ fontSize: '24px' }} />
            Filtro
          </Button>
        </div>
      </Form.Group>
      {openFilterProductForm && (
        <FiltroProduto
          entidade={entidadeId}
          setOpenFilterProductForm={setOpenFilterProductForm}
          onSelectFornecedor={onSelectFornecedor}
          onSelectMarca={onSelectMarca}
        />
      )}
      <Form.Group className="input-group">
        {show && !recomendacao && (
          <ProductList entidade={entidadeId} termo={termo} fornecedor={fornecedorCorrente} marca={marcaCorrente} />
        )}
        {show && recomendacao && <RecommenderList entidade={entidadeId} atributo={atributo} tipo={tipo} />}
        {!show && (
          <div>
            <h5>Opções de buscas por produtos:</h5>
            <ul style={{ color: 'gray', fontSize: '14px' }}>
              <li>Digitar 3 ou mais letras e clicar no botão 'Pesquisar'</li>
              <li>Ou Clicar no botão 'Recomendados' (Selecionar um cliente antes!)</li>
              <li>Ou Clicar no botão 'Filtro'</li>
            </ul>
          </div>
        )}
      </Form.Group>
    </>
  )
}

export default ProductSearch
