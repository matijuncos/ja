import StepButtons from "./FormButtons";
import styles from "./FormularioCompra.module.css";
import PDF from "../assets/images/file-icon.jpg";
import { useState } from "react";

const ThirdStep = ({
  images,
  handleChange,
  changeStep,
  step,
  buttonError,
  saveFiles,
}) => {
  const [captcha, setCaptcha] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <h3>Subí los siguientes archivos haciendo click en cada ícono</h3>
      <p className={styles.blackp}>Los archivos pueden ser pdf, png o jpg</p>
      <div className={styles.archivosContainer}>
        <div className={styles.eachInput}>
          <label>
            {images.autorizacionUsoDeImagen !== "" && (
              <span className={styles.checked}></span>
            )}
            <img
              src={PDF}
              alt="autorizacion uso de imagen"
              style={{ cursor: "pointer" }}
            />
            <p>Autorización de use de imagen</p>
            <input
              type="file"
              name="autorizacionUsoDeImagen"
              onChange={handleChange}
              hidden
            />
          </label>
        </div>
        <div className={styles.eachInput}>
          <label>
            {images.codigoDeConv !== "" && (
              <span className={styles.checked}></span>
            )}
            <img
              src={PDF}
              alt="autorizacion uso de imagen"
              style={{ cursor: "pointer" }}
            />
            <p>Código de convivencia</p>
            <input
              type="file"
              name="codigoDeConv"
              onChange={handleChange}
              hidden
            />
          </label>
        </div>
        <div className={styles.eachInput}>
          <label>
            {images.seguroMedicoFile !== "" && (
              <span className={styles.checked}></span>
            )}
            <img
              src={PDF}
              alt="autorizacion uso de imagen"
              style={{ cursor: "pointer" }}
            />
            <p>Seguro médico</p>
            <input
              type="file"
              name="seguroMedicoFile"
              onChange={handleChange}
              hidden
            />
          </label>
        </div>
        <div className={styles.eachInput}>
          <label>
            {images.frenteDNI !== "" && (
              <span className={styles.checked}></span>
            )}
            <img
              src={PDF}
              alt="autorizacion uso de imagen"
              style={{ cursor: "pointer" }}
            />
            <p>Frente de documento de identidad (*)</p>
            <input
              type="file"
              name="frenteDNI"
              onChange={handleChange}
              hidden
            />
          </label>
        </div>
        <div className={styles.eachInput}>
          <label>
            {images.dorsoDNI !== "" && <span className={styles.checked}></span>}
            <img
              src={PDF}
              alt="autorizacion uso de imagen"
              style={{ cursor: "pointer" }}
            />
            <p>Dorso de documento de identidad (*)</p>
            <input type="file" name="dorsoDNI" onChange={handleChange} hidden />
          </label>
        </div>
        <div className={styles.eachInput}>
          <label>
            {images.autorizacionPadres !== "" && (
              <span className={styles.checked}></span>
            )}

            <img
              src={PDF}
              alt="autorizacion uso de imagen"
              style={{ cursor: "pointer" }}
            />
            <p>Autorización de tus padres</p>

            <input
              type="file"
              name="autorizacionPadres"
              onChange={handleChange}
              hidden
            />
          </label>
        </div>
      </div>
      <div
        style={{
          marginLeft: "auto",
          width: "fit-content",
          marginBottom: "1em",
        }}
      ></div>
      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}></div>
          <h3 className={styles.error}>{error}</h3>
        </div>
      )}
      {buttonError && (
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}></div>
          <h3 className={styles.error}>{buttonError}</h3>
        </div>
      )}
      <StepButtons
        isValid={true}
        captcha={captcha}
        changeStep={changeStep}
        step={step}
        saveFiles={saveFiles}
      />
    </>
  );
};

export default ThirdStep;
