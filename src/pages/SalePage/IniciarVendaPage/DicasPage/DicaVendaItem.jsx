import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const DicaVendaItem = ({ item }) => {
  return (
    <>
      <td> {item.id}</td>
      <td>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props} style={{ fontSize: "16px", ...props.style }}>
              {item.descricao}
              <br />
              Autor: {item.usuario.nome}
            </Tooltip>
          )}
          placement="top"
        >
          <label variant="warning">{item.descricao.substring(0, 35)}...</label>
        </OverlayTrigger>
      </td>
      <td> {item.produto.descricao}</td>
      <td> {item.registro}</td>
    </>
  );
};

export default DicaVendaItem;
