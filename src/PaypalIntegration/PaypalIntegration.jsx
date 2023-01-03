import FormularioCompra from "../FormularioCompra/FormularioCompra";

export default function PaypalIntegration() {
  const handleRenderMercadoPago = (id) => {
    localStorage.setItem("id", id);
  };
  return (
    <>
      <FormularioCompra setShowPaypalBtn={handleRenderMercadoPago} />
    </>
  );
}
