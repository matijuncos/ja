import React from "react";
import FormularioCompra from "../FormularioCompra/FormularioCompra";

const MercadoPago = () => {
  const handleRenderMercadoPago = (id) => {
    localStorage.setItem("id", id);
  };
  return (
    <>
      <FormularioCompra setShowPaypalBtn={handleRenderMercadoPago} />
    </>
  );
};

export default MercadoPago;
