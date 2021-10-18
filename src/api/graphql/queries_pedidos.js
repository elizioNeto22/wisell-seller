import { gql } from 'apollo-boost'

export const PEDIDOS_POR_CLIENTE = gql`
  query ($entidade: ID!, $cliente: ID!) {
    pedidos: pedidosVendaPorCliente(entidade: $entidade, cliente: $cliente) {
      id
      fechamento
      valorMeta
      valorPedido
      responsavel {
        vendedor {
          id
          nome
        }
      }
      status {
        id
        descricao
      }
      qtdeItens
      qtdeVolumes
    }
  }
`

export const ITENS_PEDIDOS = gql`
  query ($entidade: ID!, $pedido: ID!) {
    items: itensPedidosVendas(entidade: $entidade, pedido: $pedido) {
      id
      produto {
        id
        descricao
      }
      valorMeta
      valorUnitario
      quantidadeVendida
    }
  }
`

export const ITENS_PEDIDOS_PRODUTO_CLIENTE = gql`
  query ($entidade: ID!, $produto: ID!, $cliente: ID!) {
    items: itensPedidosVendasPorProdutoCliente(entidade: $entidade, produto: $produto, cliente: $cliente) {
      id
      produto {
        id
        descricao
      }
      fechamento
      valorMeta
      valorUnitario
      quantidadeVendida
    }
  }
`

export const CRIAR_PEDIDO_VENDA = gql`
  mutation ($pedidovenda: PedidoVendaInput!) {
    pedido: salvarPedidoVenda(pedidoVendaInput: $pedidovenda) {
      id
      responsavel {
        ativo
        numeroEstrelas
      }
      status {
        id
        descricao
      }
      abertura
      fechamento
      valorMeta
      valorPedido
      fase {
        id
      }
      qtdeItens
      qtdeVolumes
    }
  }
`

export const PEDIDO_VENDA_CORRENTE = gql`
  query ($entidade: ID!, $vendedor: Int!, $cliente: Int!) {
    pedidoCorrente: pedidoVendaCorrente(entidade: $entidade, vendedor: $vendedor, cliente: $cliente) {
      id
      responsavel {
        ativo
        numeroEstrelas
      }
      status {
        id
        descricao
      }
      abertura
      fechamento
      valorMeta
      valorPedido
      fase {
        id
      }
      qtdeItens
      qtdeVolumes
    }
  }
`
export const PEDIDO_VENDA_POR_FILTRO = gql`
  query ($pedidovendafiltro: PedidoVendaFiltro!) {
    pedidosVendas: pedidosVendaPorFiltro(filtro: $pedidovendafiltro) {
      id
      fechamento
      valorMeta
      valorPedido
      responsavel {
        vendedor {
          id
          nome
        }
      }
      status {
        id
        descricao
      }
      qtdeItens
      qtdeVolumes
    }
  }
`
