import React, { useCallback, useContext } from 'react'
import { MdAdjust } from 'react-icons/md'
import AuthContext from '../../store/auth-context'

const ClienteItem = ({ id, item, onSelectCliente }) => {
  const authCtx = useContext(AuthContext)

  const handleSelectCliente = useCallback(
    (evt) => {
      evt.preventDefault()
      onSelectCliente(id)
      authCtx.setFornecedor(id, item.nomeFantasia)
    },
    [onSelectCliente, id, authCtx, item.nomeFantasia]
  )

  const btn_style = 'info'

  return (
    <>
      <td>
        <button onClick={handleSelectCliente} className={`btn btn-outline-info btn-rounded`}>
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

export default ClienteItem
