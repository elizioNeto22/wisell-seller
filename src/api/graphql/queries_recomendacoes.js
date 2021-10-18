import { gql } from "apollo-boost";

export const RECOMENDACOES_POR_CLIENTE = gql`
  query ($entidade: ID!, $cliente: ID!, $tipo: Int) {
    produtos: produtosPorRecomendacao(
      entidade: $entidade
      cliente: $cliente
      tipo: $tipo
    ) {
      id
      descricao
      unidade {
        id
        descricao
      }
      marca {
        id
        descricao
      }
    }
  }
`;

export const RECOMENDACOES_POR_ATRIBUTO = gql`
  query ($entidade: ID!, $atributo: String!, $tipo: Int!) {
    produtos: produtosPorRecomendacao(
      entidade: $entidade
      atributo: $atributo
      tipo: $tipo
    ) {
      id
      descricao
      unidade {
        id
        descricao
      }
      marca {
        id
        descricao
      }
    }
  }
`;
