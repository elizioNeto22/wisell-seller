import { gql } from "apollo-boost";

export const DICAS_VENDAS = gql`
  query ($entidade: ID!, $cliente: Int, $produto: Int) {
    dicas: dicasVendas(
      entidade: $entidade
      cliente: $cliente
      produto: $produto
    ) {
      id
      descricao
      cliente {
        id
        nomeFantasia
      }
      produto {
        id
        descricao
      }
      registro
      usuario {
        id
        nome
      }
    }
  }
`;
