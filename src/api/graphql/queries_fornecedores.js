import { gql } from "apollo-boost";

export const FORNECEDORES_POR_TERMO = gql`
  query ($entidade: ID!, $termo: String!) {
    fornecedores: fornecedoresPorTermo(entidade: $entidade, termo: $termo) {
      id
      nomeFantasia
      pedidoMinimo
      prazoEntrega
    }
  }
`;
