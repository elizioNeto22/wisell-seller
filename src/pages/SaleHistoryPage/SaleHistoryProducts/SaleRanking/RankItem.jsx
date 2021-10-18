import React from "react";

const RankItem = ({ id, item }) => {
  return (
    <div className="d-flex mt-3 py-2 border-bottom">
      <span className="img-sm rounded-circle bg-warning text-white text-avatar">
        {id}
      </span>
      <div className="wrapper ml-2">
        <p className="mb-n1 font-weight-semibold">{item.descricao}</p>
        <small>Qtde: {item.qtdeCompra}</small>
      </div>
      <small className="text-muted ml-auto">
        Últ.Compra: {item.ultimaCompra}
      </small>
    </div>
  );
};

export default RankItem;
