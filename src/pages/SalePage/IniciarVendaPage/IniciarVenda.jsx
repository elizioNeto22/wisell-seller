import React, { useContext } from "react";
import { useMutation } from "react-apollo";

import { Link } from "react-router-dom";
import { Form, Tabs, Tab } from "react-bootstrap";
import { MdClose } from "react-icons/md";

import DicaVendaCliente from "./DicasPage/DicaVendaCliente";
import MaisInfoVendaCliente from "./MaisInfoPage/MaisInfoVendaCliente";
import * as queries from "../../../api/graphql/queries_pedidos";

import styles from "./IniciarVenda.module.css";
import AuthContext from "../../../store/auth-context";

const IniciarVenda = ({
  entidadeId,
  clienteId,
  metavendaValor,
  setOpenStartSaleForm,
}) => {
  const authCtx = useContext(AuthContext);
  const [addPedidoVenda, { loading, error }] = useMutation(
    queries.CRIAR_PEDIDO_VENDA
  );

  if (loading) return <p>Iniciando o pedido...</p>;
  if (error) return <p>An error occurred</p>;

  const handleIniciarVenda = (event) => {
    event.preventDefault();

    //salvar cabeçalho pedido
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    let month_str = month.toString();
    if (month < 10) month_str = "0" + month.toString();
    const day = today.getDate();
    let day_str = day.toString();
    if (day < 10) day_str = "0" + day.toString();
    let date = year + "-" + month_str + "-" + day_str;

    const pedidovenda = {
      id: 0,
      cliente: clienteId,
      responsavel: 15321,
      status: 1,
      abertura: date,
      fechamento: date,
      valorMeta: metavendaValor,
      valorPedido: 0,
      fase: 1,
      entidadeGestora: entidadeId,
    };

    addPedidoVenda({
      variables: {
        pedidovenda,
      },
    })
      .then(({ data }) => {
        // Setar pedido corrente
        authCtx.setPedidoCorrente(data.pedido);
      })
      .catch((e) => {
        //tratamento do erro
        return <p>Erro ao gerar no pedido de venda...</p>;
      });
    setOpenStartSaleForm(false);
  };

  return (
    <div className="forms-sample">
      <Form.Group className="page-header">
        <h4 className="page-title">Inicialização da venda</h4>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <button
              className={styles.button}
              onClick={() => setOpenStartSaleForm(false)}
            >
              <MdClose />
            </button>
          </ol>
        </nav>
      </Form.Group>

      <Tabs defaultActiveKey="preparacao" id="iniciar_venda" className="mb-3">
        <Tab eventKey="preparacao" title="Preparação">
          <p style={{ color: "silver" }}>
            Passos preparatórios para iniciar a venda:
            <ul>
              <li>
                Analise o histórico de pedidos do cliente...
                <Link to="/sale-history">Histórico de Pedidos do Cliente</Link>
              </li>
              <li>
                Agende uma data e hora com o cliente...com duração prevista!{" "}
                <Link to="/agenda-list">Agenda de Vendas</Link>
              </li>
              <li>
                Veja as Dicas, Recomendações e Condições comerciais de vendas
                para este cliente nas abas laterais...
              </li>
              <li>
                Descubra as preferências comerciais, profissionais e pessoais do
                comprador que você está dialogando...
              </li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="dicas" title="Dicas">
          <DicaVendaCliente entidade={entidadeId} cliente={0} produto={0} />
        </Tab>
        <Tab eventKey="recomendacoes" title="Recomendações">
          <p style={{ color: "silver" }}>
            No Wisell temos as seguintes recomendações
            <ul>
              <li>
                Baseadas no histórico de pedidos do cliente...{" "}
                <Link to="/sale-history">Histórico de Pedidos do Cliente</Link>
              </li>
              <li>
                Baseadas na segmentação do cliente, produtos comprados dentro do
                segmento!{" "}
                <Link to="/sale-history-segment">
                  Histórico de Pedidos por Segmento
                </Link>
              </li>
              <li>Baseadas nas ofertas mais recentes para este cliente...</li>
              <li>
                São mais de 50 tipos de recomendações, e toda vez que você clica
                no botão "recomendados", uma nova lista de produtos é
                sugerida...
              </li>
            </ul>
          </p>
        </Tab>
        <Tab eventKey="comercial" title="Condições Comerciais">
          <h1>...</h1>
        </Tab>
        <Tab eventKey="mais_info" title="+Info">
          <MaisInfoVendaCliente />
        </Tab>
      </Tabs>

      <Form.Group className="input-group">
        <button className="btn btn-secondary" onClick={handleIniciarVenda}>
          Iniciar Venda
        </button>
      </Form.Group>
    </div>
  );
};

export default IniciarVenda;
