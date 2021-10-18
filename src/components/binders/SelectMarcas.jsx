import React from "react";
import { useQuery } from "react-apollo";
import * as queries from "../../api/graphql/queries";
import { Form } from "react-bootstrap";

const SelectMarcas = ({ entidade, onSelectMarca }) => {
  const { loading, error, data } = useQuery(queries.MARCAS, {
    variables: { entidade },
  });

  if (loading) return <p>Carregando marcas ...</p>;
  if (error)
    return (
      <p style={{ color: "red" }}>
        Erro, verificar conexão com o servidor do Wisell ...{error.message}
      </p>
    );
  if (data.marcas.length == 0)
    return <p style={{ color: "red" }}>nenhuma marca encontrada ...</p>;

  const handleOnChange = (event) => {
    event.preventDefault();
    onSelectMarca(event.target.value);
  };

  return (
    <Form.Group controlId="marca">
      <Form.Label>Marca : </Form.Label>
      <Form.Control as="select" custom onChange={handleOnChange}>
        {data.marcas.map((item, index) => {
          return (
            <option key={index} value={item.id}>
              {item.descricao}
            </option>
          );
        })}{" "}
      </Form.Control>
    </Form.Group>
  );
};

export default SelectMarcas;
