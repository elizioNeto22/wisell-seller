import React, { useCallback, useContext } from 'react'
import { MdAdjust } from 'react-icons/md'
import AuthContext from '../../store/auth-context'

const ProdutoItem = ({ id, item, onSelectProduto }) => {
  const authCtx = useContext(AuthContext)

  const handleSelectProduto = useCallback(
    (evt) => {
      evt.preventDefault()
      onSelectProduto(id)
      authCtx.setFornecedor(id, item.nomeFantasia)
    },
    [onSelectProduto, id, authCtx, item.nomeFantasia]
  )

  const btn_style = 'info'

  return (
    <>
      <td>
        <button onClick={handleSelectProduto} className={`btn btn-outline-info btn-rounded`}>
          <MdAdjust />
        </button>
      </td>
      <td> {item.id}</td>
      <td> {item.nomeFantasia}</td>
      <td>{item.pedidoMinimo}</td>
      <td>{item.prazoEntrega}</td>
    </>
  )
}

export default ProdutoItem
