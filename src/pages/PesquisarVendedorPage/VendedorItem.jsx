import React, { useCallback, useContext } from 'react'
import { MdAdjust } from 'react-icons/md'
import AuthContext from '../../store/auth-context'

const VendedorItem = ({ id, item, onSelectVendedor }) => {
  const authCtx = useContext(AuthContext)

  const handleSelectVendedor = useCallback(
    (evt) => {
      evt.preventDefault()
      onSelectVendedor(id)
      authCtx.setFornecedor(id, item.nomeFantasia)
    },
    [onSelectVendedor, id, authCtx, item.nomeFantasia]
  )

  const btn_style = 'info'

  return (
    <>
      <td>
        <button onClick={handleSelectVendedor} className={`btn btn-outline-info btn-rounded`}>
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

export default VendedorItem
