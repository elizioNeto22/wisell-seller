import React, { useState, useEffect, useContext } from "react";
import { Tabs, Tab } from "react-bootstrap";

import SelectCustomer from "./ProductsPageItems.tsx/SelectCustomer";
import ProductSearch from "./ProductsPageItems.tsx/ProductSearch";
import OrderResume from "./Order/Resume/OrderResume";
import OrderItems from "./Order/Items/OrderItems";
import OrderFunctions from "./Order/Functions/OrderFunctions";
import ColabManager from "../ColabPage";

import AuthContext from "../../store/auth-context";

const SalePage = () => {
  const authCtx = useContext(AuthContext);
  const pedido = authCtx.pedido;

  const [showOrderResume, SetShowOrderResume] = useState(false);

  // const handleOrderResumeOpen = useCallback(() => {
  //   SetShowOrderResume(true);
  // }, [showOrderResume, SetShowOrderResume]);

  console.log("pedido context (Order Resume)", pedido);

  useEffect(() => {
    console.log("pedido effect", pedido);
    if (pedido) {
      SetShowOrderResume(true);
    }
  }, [showOrderResume, pedido, SetShowOrderResume]);

  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Vender </h3>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Produtos a vender</h4>
              <form className="forms-sample">
                <SelectCustomer />
                <ProductSearch />
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="forms-sample">
                <Tabs
                  defaultActiveKey="resumo"
                  id="resumo_venda"
                  className="mb-3"
                >
                  <Tab eventKey="resumo" title="Resumo Pedido de Venda">
                    {showOrderResume && <OrderResume pedido={pedido} />}
                    <h4 className="card-title">Itens do Pedido de Venda</h4>
                    <OrderItems />
                    <OrderFunctions />
                  </Tab>
                  <Tab eventKey="rejeicoes" title="Rejeições">
                    <h4 className="card-title">
                      Produtos recusados nesta venda
                    </h4>
                  </Tab>
                  <Tab eventKey="analitica" title="Analítica">
                    <h4 className="card-title">Analítica do Pedido de Venda</h4>
                  </Tab>
                  <Tab eventKey="assistente" title="Assistente de Vendas">
                    <ColabManager contacts={false} />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalePage;
