import React from 'react'
import { useQuery } from 'react-apollo'

import * as queries from '../../api/graphql/queries_fornecedores'
import VendedorItem from './VendedorItem'

// import './ListaFornecedor.css'

const ListaVendedor = ({ entidade, termo, onSelectVendedor }) => {
  const { loading, error, data } = useQuery(queries.FORNECEDORES_POR_TERMO, {
    variables: { entidade, termo },
  })

  console.log(data)

  if (loading) return <p>Carregando vendedores ...</p>
  if (error) return <p style={{ color: 'red' }}>Erro, verificar conexão com o servidor do Wisell ...</p>
  if (!data) return <p style={{ color: 'red' }}>nenhum vendedor encontrado ...</p>

  return (
    <div className="lista-container" style={{ overflowY: 'scroll', width: '100%', height: '500px' }}>
      <table style={{ color: 'black' }}>
        <thead>
          <tr>
            <th>Sel</th>
            <th>Código</th>
            <th>Fornecedor</th>
            <th>Ped.Mín</th>
            <th>Prazo.Ent</th>
          </tr>
        </thead>
        <tbody>
          {data?.fornecedores?.map((item) => {
            return (
              <tr key={item.id}>
                <VendedorItem id={item.id} item={item} onSelectVendedor={onSelectVendedor} />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListaVendedor
