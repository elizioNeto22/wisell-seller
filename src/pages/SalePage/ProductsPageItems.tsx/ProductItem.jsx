import React, { useCallback } from "react";
import { MdAddShoppingCart, MdModeEdit } from "react-icons/md";

const ProductItem = ({ id, item, edit, onModalOpen }) => {
  const handleModalOpen = useCallback(
    (evt) => {
      evt.preventDefault();
      onModalOpen(item);
    },
    [onModalOpen, item]
  );

  const btn_style = edit ? "warning" : "info";

  return (
    <>
      <td> {item.id}</td>
      <td> {item.descricao}</td>
      <td>{item.marca.descricao}</td>
      <td></td>
      <td>
        <button
          onClick={handleModalOpen}
          className={`btn btn-${btn_style} btn-rounded`}
        >
          {edit ? <MdModeEdit /> : <MdAddShoppingCart />}
        </button>
      </td>
    </>
  );
};

export default ProductItem;
