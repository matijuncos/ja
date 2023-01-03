import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlockUi from "react-block-ui";
import styles from "./MercadoPago.module.css";
import axios from "axios";
import "react-block-ui/style.css";

const ResultMP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const preferenceId =
    localStorage.getItem("preferenceId") &&
    JSON.stringify(localStorage.getItem("preferenceId"));
  const clientData =
    localStorage.getItem("client") &&
    JSON.parse(localStorage.getItem("client"));
  const discount = Number(localStorage.getItem("discount"));
  const coupon = localStorage.getItem("coupon")
    ? localStorage.getItem("coupon")
    : "No Utilizó";
  const status = location.search.includes("success");
  const [error, setError] = useState(null);
  const [blocking, setBlocking] = useState(false);
  const client = {
    ...clientData,
    cupon: coupon,
    medioDePago:
      discount === 100
        ? "Coupon"
        : discount !== 100 &&
          location.pathname.includes("MP") &&
          "Mercado Pago",
    usoDescuento: coupon !== "No Utilizó" ? "Si" : "No",
    porcentajeDeDescuento: discount ? discount : 0,
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (status) {
      let splittedData = location.search.split("&");
      let paymentId =
        splittedData.find((e) => e.includes("payment_id")) &&
        splittedData.find((e) => e.includes("payment_id")).split("=")[1];
      setBlocking(true);
      handleSubmit(paymentId);
    } else {
      navigate("/feedback", {
        state: {
          origin: "Mercado Pago",
          status: "failure",
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleSubmit = async (paymentId) => {
    try {
      const { data: response } = await axios.post(
        process.env.REACT_APP_BIG_FORM_ENDPOINT,
        {
          ...client,
          preferenceId,
          paymentId: discount === 100 ? `Cupón: ${coupon}` : paymentId,
        }
      );
      if (response.success) {
        await axios.put(process.env.REACT_APP_GET_COUPON_BASE_URL, {
          discountCoupon: coupon,
        });
        navigate("/feedback", {
          state: {
            origin: coupon !== "No utilizó" ? "Mercado Pago" : "Pago con cupón",
            status: "success",
            payer: client,
          },
        });
        setBlocking(false);
      } else {
        setBlocking(false);
        setError("Oops, parece que algo falló... Intalo nuevamente más tarde.");
      }
    } catch (error) {
      setBlocking(false);
      setError("Oops, parece que algo falló... Intalo nuevamente más tarde.");
    }
  };

  return (
    <BlockUi blocking={blocking} message="Por favor, aguarda">
      <div className={styles.container}>
        {error && (
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}></div>
            <h3 className={styles.error}>{error}</h3>
          </div>
        )}
      </div>
    </BlockUi>
  );
};

export default ResultMP;
