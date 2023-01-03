import React, { useState } from "react";
import StepButtons from "./FormButtons";
import styles from "./FormularioCompra.module.css";

const SecondStep = ({ formData, handleChange, changeStep, step }) => {
  const [error, setError] = useState(null);

  return (
    <>
      <div className={styles.inputGroup}>
        <label>Delegación a la que perteneces (*)</label>
        <select
          value={formData.delegacion}
          onChange={handleChange}
          name="delegacion"
        >
          <option value="default" hidden>
            Elige la delegacion a la que perteneces
          </option>
          {[{ country: "Argentina" }].map((d) => (
            <option key={d.country}>{d.country}</option>
          ))}
        </select>
      </div>

      <div className={styles.inputGroup}>
        <label>Nivel de estudios (*)</label>
        <input
          value={formData.nivelDeEstudios}
          type="text"
          name="nivelDeEstudios"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu nivel de estudios"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Años de estudios (*)</label>
        <input
          value={formData.añosDeEstudios}
          type="text"
          name="añosDeEstudios"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Años de estudios"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>¿Habla inglés? (*)</label>
        <select onChange={handleChange} name="ingles" value={formData.ingles}>
          <option value="default" hidden>
            Seleccione la opción correcta
          </option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>

      {formData.ingles === "Si" && (
        <div className={styles.inputGroup}>
          <label>Nivel de ingles</label>
          <input
            value={formData.nivelIngles}
            type="text"
            name="nivelIngles"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Ingresá tu nivel de inglés"
          />
        </div>
      )}

      <div className={styles.inputGroup}>
        <label>Idiomas adicionales</label>
        <input
          value={formData.otrosIdiomas}
          type="text"
          name="otrosIdiomas"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá otros idiomas"
        />
      </div>

      <div className={styles.inputGroup}>
        <label>¿Cómo conociste FIE? (*)</label>
        <textarea
          value={formData.comoConocisteFie}
          name="comoConocisteFie"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Contanos como nos conociste..."
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Seguro médico (*)</label>
        <input
          value={formData.seguroMedico}
          type="text"
          name="seguroMedico"
          onChange={handleChange}
          autoComplete="off"
          placeholder="¿Cuál es tu seguro médico?"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Número de seguro médico (*)</label>
        <input
          value={formData.numeroSeguro}
          type="text"
          name="numeroSeguro"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu número de seguro"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Vencimiento de la credencial de seguro (*)</label>
        <input
          value={formData.vencimientoSeguro}
          type="date"
          name="vencimientoSeguro"
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Restricción alimentaria</label>
        <input
          value={formData.restriccionAlimentaria}
          type="text"
          name="restriccionAlimentaria"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Restricción alimentaria"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>¿Qué alimentos no puede consumir?</label>
        <input
          value={formData.alimentosNoPuedeConsumir}
          type="text"
          name="alimentosNoPuedeConsumir"
          onChange={handleChange}
          autoComplete="off"
          placeholder="No podés consumir..."
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Alergias (*)</label>
        <select
          onChange={handleChange}
          name="alergias"
          value={formData.alergias}
        >
          <option value="default" hidden>
            Sufris alguna alergia?
          </option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      {formData.alergias === "Si" && (
        <div className={styles.inputGroup}>
          <label>¿Qué alergias?</label>
          <input
            value={formData.queAlergias}
            type="text"
            name="queAlergias"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Contanos que alergias..."
          />
        </div>
      )}
      <div className={styles.inputGroup}>
        <label>Grupo sanguineo (*)</label>
        <input
          value={formData.grupoSanguineo}
          type="text"
          name="grupoSanguineo"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Grupo sanguineo"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>¿Requiere atención especial? (*)</label>
        <select
          onChange={handleChange}
          name="atencionEspecial"
          value={formData.atencionEspecial}
        >
          <option value="default" hidden>
            ¿Requieres de atencion especial?
          </option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      {formData.atencionEspecial === "Si" && (
        <div className={styles.inputGroup}>
          <label>Motivos de atención especial</label>
          <input
            value={formData.motivosDeAtencion}
            type="text"
            name="motivosDeAtencion"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Contanos que alergias..."
          />
        </div>
      )}
      <div className={styles.inputGroup}>
        <label>¿Tomás medicamento regularmente? ¿Cuál es el motivo?</label>
        <input
          value={formData.medicamentoRegular}
          type="text"
          name="medicamentoRegular"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Contanos que medicamentos y por qué motivo"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Nombre de tutor (*)</label>
        <input
          value={formData.nombreTutor}
          type="text"
          name="nombreTutor"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá el nombre de tu tutor"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Apellido de tutor (*)</label>
        <input
          value={formData.apellidoTutor}
          type="text"
          name="apellidoTutor"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá el apellido de tu tutor"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Correo electrónico de tutor (*)</label>
        <input
          value={formData.mailTutor}
          type="mail"
          name="mailTutor"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá el correo electrónico de tu tutor"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Teléfono de tutor (*)</label>
        <input
          value={formData.telefonoTutor}
          type="tel"
          name="telefonoTutor"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá el teléfonon de tu tutor"
        />
      </div>
      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}></div>
          <h3 className={styles.error}>{error}</h3>
        </div>
      )}
      <div>
        <StepButtons isValid={true} changeStep={changeStep} step={step} />
      </div>
    </>
  );
};
export default SecondStep;
