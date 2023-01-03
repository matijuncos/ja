import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PaypalIntegration from "./PaypalIntegration/PaypalIntegration";
import MercadoPago from "./MercadoPago/MercadoPago";
import styles from "./Pagos.module.css";
const Pagos = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { method } = useParams();
  const navigate = useNavigate();
  const paymentMethod = () => {
    switch (method) {
      case "extranjeros":
        return <PaypalIntegration />;
      default:
        return <MercadoPago />;
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/")}> Volver</button>
      {paymentMethod()}
    </div>
  );
};

export default Pagos;
