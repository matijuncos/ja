import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import styles from "../PaypalIntegration/PaypalIntegration.module.css";
import { useNavigate } from "react-router-dom";
const FormStepPaypal = ({ formData }) => {
  const [discount, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [cuponVisible, setCuponVisible] = useState(false);
  const [error, setError] = useState(null);
  const [blocking, setBlocking] = useState(false);
  const [cuponError, setCuponError] = useState(null);
  const [approvedCoupon, setApprovecCoupon] = useState(false);
  const navigate = useNavigate();

  const submitCoupon = async () => {};
  useEffect(() => {
    if (error) {
      navigate("/feedback", {
        state: {
          origin: "paypal",
          status: "failure",
        },
      });
    }
  }, [error, navigate]);

  const completeDiscountHandler = () => {
    saveClientHandler(discount);
  };

  const approvedPaymentHandler = (discount, paymentId) => {
    saveClientHandler(discount, paymentId);
  };

  const saveClientHandler = async (disc, paymentId) => {};

  return (
    <div>
      <div className={styles.container}>
        <h2>Estás muy cerca de conseguir tu entrada</h2>
        <div className={styles.inputGroup}>
          <div
            onClick={() => setCuponVisible(!cuponVisible)}
            className={styles.iHaveCoupon}
          >
            <span>
              {cuponVisible && "No "} Tengo Un Cupón <br /> De Descuento
            </span>
          </div>
          {cuponVisible && (
            <div className={styles.couponValidator}>
              <input
                type="text"
                placeholder="Ingresá el codigo del cupon"
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className={styles.validarCuponBtn} onClick={submitCoupon}>
                Validar cupón
              </button>
            </div>
          )}
          {cuponError && cuponError}

          <div className={styles.flexIt}>
            <PayPalScriptProvider
              options={{
                "client-id": process.env.REACT_APP_LIVE_PAYPAL,
                components: "buttons",
                currency: "USD",
              }}
            >
              <PayPalButtons
                forceReRender={[discount]}
                style={{ layout: "vertical" }}
                options={{
                  "client-id": process.env.REACT_APP_LIVE_PAYPAL,
                  currency: "USD",
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        description: "Entrada FIE extranjeros",
                        amount: {
                          currency_code: "USD",
                          value: 560 * ((100 - discount) / 100),
                        },
                      },
                    ],
                  });
                }}
                onApprove={async (data, actions) => {
                  actions.order.capture().then((details) => {
                    approvedPaymentHandler(discount, details.id);
                  });
                }}
                onCancel={() => {}}
                onError={(error) => {
                  setError(true);
                  console.log(error);
                }}
              />
            </PayPalScriptProvider>
          </div>

          <h3 className={styles.summary}>
            {" "}
            {approvedCoupon && (
              <h3>Tu cupón es válido. Tenés un descuento del {discount}%</h3>
            )}
            El total a pagar por tu Entrada es de:{" "}
            {560 * ((100 - discount) / 100)} dólares
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FormStepPaypal;
