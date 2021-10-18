import React, { useCallback } from "react";

import { Form } from "react-bootstrap";

import SaleList from "./SaleHistoryProducts/SaleList";
import SelectCustomer from "./SaleHistoryProducts/SelectCustomer";
import OrdersHistory from "./OrderHistory/Resume/OrdersHistory";
import OrderItems from "./OrderHistory/Items/OrderItems";
import OrderFunctions from "./OrderHistory/Functions/OrderFunctions";
import { useState } from "react";

const SaleHistory = ({ entidadeId = 5 }) => {
  const [hasCustomer, SetHasCustomer] = useState(false);
  const [orderId, setOrderId] = useState(0);

  const handleHasCustomer = () => {
    SetHasCustomer(true);
  };

  const onItemClicked = useCallback((id) => {
    setOrderId(id);
  }, []);

  return (
    <>
      <div className="page-header">
        <h3 className="page-title"> Histórico de Vendas </h3>
      </div>
      <div className="row">
        <div className="col-lg-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Pedidos realizados</h4>
              <form className="forms-sample">
                <SelectCustomer handleHasCustomer={handleHasCustomer} />
                {hasCustomer && (
                  <SaleList
                    entidade={entidadeId}
                    onItemClicked={onItemClicked}
                  />
                )}
              </form>
            </div>
          </div>
        </div>
        {hasCustomer && (
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Evolução Vendas Cliente</h4>
                <div className="forms-sample">
                  <OrdersHistory />
                  {orderId && (
                    <>
                      <h4 className="card-title">
                        Itens do Pedido de Venda: {orderId}
                      </h4>
                      <OrderItems entidade={entidadeId} pedido={orderId} />
                      <OrderFunctions />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SaleHistory;
