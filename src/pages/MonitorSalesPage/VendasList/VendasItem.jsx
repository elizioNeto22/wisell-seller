import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { MdModeEdit } from "react-icons/md";

import { Form, Button, Row, Col, ProgressBar } from "react-bootstrap";

const VendasItem = ({ id, item }) => {
  return (
    <>
      <td>53275531</td>
      <td width="60%">{item.descricao}</td>
      <td width="15%">{item.registro}</td>
      <td> R$ 1.877.99 </td>
      <td className="text-danger">
        {" "}
        28.76% <i className="mdi mdi-arrow-down"></i>
      </td>
      <td> 9 </td>
      <td className="text-danger">
        {" "}
        8.76% <i className="mdi mdi-arrow-down"></i>
      </td>
      <td> 19 </td>
      <td>
        <label className="badge badge-warning">In progress</label>
      </td>
      <td>
        <ProgressBar variant="success" now={91} />
      </td>
      <td width="3%">
        <Link to="sale-page">
          <button className={`btn btn-info btn-rounded`}>
            <MdModeEdit />
          </button>
        </Link>
      </td>
    </>
  );
};

export default VendasItem;
