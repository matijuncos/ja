import React, { useEffect, useState } from "react";
import styles from "./FormularioCompra.module.css";

const StepButtons = ({ changeStep, step, captcha, saveFiles }) => {
  const [blocked, setBlocked] = useState(null);

  return (
    <div className={styles.stepsButtonsContainer}>
      {step === 0 && (
        <button
          disabled={false}
          className={styles.next}
          onClick={() => changeStep(1)}
        >
          Siguiente
        </button>
      )}
      {step === 1 && (
        <>
          <button onClick={() => changeStep(-1)}>Volver</button>
          <button
            disabled={false}
            className={styles.next}
            onClick={() => changeStep(1)}
          >
            Siguiente
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <button onClick={() => changeStep(-1)}>Volver</button>
          <button
            disabled={false}
            onClick={saveFiles}
            className={captcha ? styles.button : styles.disabled}
          >
            Siguiente
          </button>
        </>
      )}
    </div>
  );
};

export default StepButtons;
