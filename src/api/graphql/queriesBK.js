import { gql } from "apollo-boost";

export const UNIDADES = gql`
  query {
    unidades: allUnidades {
      codigo
      descricao
      registro
      usuario
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
  query {
    marcas: allMarcas {
      codigo
      descricao
      registro
      usuario
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
    produtos: allProdutos {
      codigo
      descricao
      departamento
      fabricante
      registro
      usuario
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
