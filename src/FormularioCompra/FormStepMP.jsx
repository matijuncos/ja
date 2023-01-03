import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../MercadoPago/MercadoPago.module.css";

const FormStepMP = ({ formData }) => {
  const [quantity] = useState(1);
  const [error, setError] = useState(false);
  const [cuponVisible, setCuponVisible] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [cuponError, setCuponError] = useState(null);
  const [approvedCoupon, setApprovecCoupon] = useState(false);
  const [unitPrice, setUnitPrice] = useState(69000);
  const navigate = useNavigate();
  const FORM_ID = "payment-form";

  const submitCoupon = async () => {};
  const updateCoupon = async () => {};
  const createPreference = async () => {};

  return (
    <div>
      <div className={styles.container}>
        <h2>Estás muy cerca de conseguir tu entrada</h2>
        <div className={styles.inputGroup}>
          <div className={styles.paymentMethods}>
            <h3>Aboná con:</h3>
            <ul>
              <li>
                <p>Tu cuenta de mercado pago.</p>
              </li>
              <li>
                <p>Todas las tarjetas de crédito en 6 pagos sin interés.</p>
              </li>
              <li>
                <p>Tarjetas de débito.</p>
              </li>
            </ul>
          </div>
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
              <div>{cuponError && cuponError}</div>
            </div>
          )}
          <div className={styles.flexIt}>
            <button
              className={styles.mpBtn}
              onClick={createPreference}
              disabled={false}
            >
              Pagar con Mercado Pago
            </button>
          </div>
          <form
            id={FORM_ID}
            method="GET"
            style={{ display: "flex", justifyContent: "center" }}
          />
        </div>
        <h3 className={styles.summary}>
          {" "}
          {approvedCoupon && (
            <h3>Tu cupón es válido. Tenés un descuento del {discount}%</h3>
          )}
          El total a pagar por {quantity}{" "}
          {quantity < 2 ? "Entrada" : "Entradas"} es de:{" "}
          {69000 * ((100 - discount) / 100)} pesos argentinos.
        </h3>

        {error && (
          <h3 className={styles.error}>
            Algo salió mal! Reintentalo por favor...
          </h3>
        )}
      </div>
    </div>
  );
};

export default FormStepMP;
