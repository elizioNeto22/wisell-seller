import { gql } from "apollo-boost";

export const UNIDADES = gql`
  query {
    unidades {
      id
      descricao
      registro
      usuario {
        id
        nome
      }
    }
  }
`;

export const DEPARTAMENTOS = gql`
  query {
    departamentos: allDepartamentos {
      codigo
      descricao
      registro
      usuario
    }
  }
`;
export const SECOES = gql`
  query {
    secoes: allSecaos {
      codigo
      descricao
      departamento
      registro
      usuario
    }
  }
`;
export const CATEGORIAS = gql`
  query {
    categorias: allCategoria {
      codigo
      descricao
      secao
      registro
      usuario
    }
  }
`;
export const SUBCATEGORIAS = gql`
  query {
    subcategorias: allSubcategoria {
      codigo
      descricao
      departamento
      secao
      categoria
      registro
      usuario
    }
  }
`;
export const MARCAS = gql`
  query ($entidade: ID!) {
    marcas: marcas(entidade: $entidade) {
      id
      descricao
    }
  }
`;
export const APRESENTACOES = gql`
  query {
    apresentacoes: allApresentacaos {
      codigo
      descricao
      registro
      usuario
    }
  }
`;

export const PRODUTOS = gql`
  query {
    produtos(entidade: $entidade) {
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

export const PRODUTOS_POR_TERMO_FORNECEDOR_MARCA = gql`
  query ($entidade: ID!, $termo: String, $fornecedor: Int, $marca: Int) {
    produtos: produtosPorTermoFornecedorMarca(
      entidade: $entidade
      termo: $termo
      fornecedor: $fornecedor
      marca: $marca
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

export const PRODUTOS_POR_MARCA = gql`
  query ($entidade: ID!, $marca: Int!) {
    produtos: produtosPorMarca(entidade: $entidade, marca: $marca) {
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

export const PRODUTOS_POR_TERMO = gql`
  query ($entidade: ID!, $termo: String) {
    produtos: produtosPorTermo(entidade: $entidade, termo: $termo) {
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

export const PRODUTOS_POR_RECOMENDACAO = gql`
  query ($entidade: ID!, $cliente: ID!) {
    produtos: produtosPorRecomendacao(entidade: $entidade, cliente: $cliente) {
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

export const PRODUTOS_TOPN_POR_CLIENTE = gql`
  query ($entidade: ID!, $cliente: Int!, $topn: Int!) {
    produtos: produtosTopNPorCliente(
      entidade: $entidade
      cliente: $cliente
      topn: $topn
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
      ultimaCompra
      qtdeCompra
    }
  }
`;

export const TIPOSFILIAIS = gql`
  query {
    tiposfiliais: allTipoFilials {
      codigo
      descricao
      vende
      registro
      usuario
    }
  }
`;
export const GRUPOSINTERNOS = gql`
  query {
    gruposinternos: allGrupoInternos {
      codigo
      descricao
      responsavel
      registro
      usuario
    }
  }
`;
export const GRUPOSEXTERNOS = gql`
  query {
    gruposexternos: allGrupoExternos {
      codigo
      descricao
      responsavel
      registro
      usuario
    }
  }
`;
export const RAMOATIVIDADES = gql`
  query {
    ramosatividades: allRamoAtividades {
      codigo
      descricao
      vende
      registro
      usuario
    }
  }
`;
export const ATIVIDADESCOMERCIAIS = gql`
  query {
    atividadescomerciais: allAtividadeComercials {
      codigo
      descricao
      ramoAtividade
      registro
      usuario
    }
  }
`;
export const GRUPOSFILIAIS = gql`
  query {
    gruposfiliais: allGrupoFilials {
      codigo
      descricao
      responsavel
      registro
      usuario
    }
  }
`;
export const PESSOAFISICA = gql`
  query {
    pessoasfisicas: allPessoaFisicas {
      codigo
      descricao
      ativa
      registro
      usuario
    }
  }
`;
export const PESSOAJURIDICA = gql`
  query {
    pessoasjuridicas: allPessoaJuridicas {
      codigo
      descricao
      ativa
      registro
      usuario
    }
  }
`;

export const CLIENTES_POR_TERMO = gql`
  query ($entidade: ID!, $termo: String) {
    clientes: clientesPorTermo(entidade: $entidade, termo: $termo) {
      id
      nomeFantasia
      metaValor
      dataUltimaCompra
      cdCliente
    }
  }
`;

export const CLIENTES_POR_RECOMENDACAO = gql`
  query (
    $entidade: ID!
    $vendedor: Int
    $tipo: Int!
    $atributo: String
    $topn: Int
  ) {
    clientes: clientesPorRecomendacao(
      entidade: $entidade
      vendedor: $vendedor
      tipo: $tipo
      atributo: $atributo
      topn: $topn
    ) {
      id
      nomeFantasia
      metaValor
      dataUltimaCompra
      cdCliente
    }
  }
`;

export const CLIENTES = gql`
  query {
    clientes: allClientes {
      codigo
      descricao
      tipo
      ativa
      registro
      usuario
    }
  }
`;

export const GRUPOSECONOMICOS = gql`
  query {
    gruposeconomicos: allGrupoEconomicos {
      codigo
      descricao
      responsavel
      registro
      usuario
    }
  }
`;
export const VENDEDORES = gql`
  query {
    vendedores: allVendedors {
      codigo
      descricao
      ativo
      supervisor
      nivel
      registro
      usuario
    }
  }
`;
