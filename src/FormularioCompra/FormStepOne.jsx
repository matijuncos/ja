import React, { useState } from "react";
import StepButtons from "./FormButtons";
import styles from "./FormularioCompra.module.css";
const FirstStep = ({ formData, handleChange, changeStep, step }) => {
  // useEffect(() => {
  //   const calculateAge = () => {
  //     let today = new Date();
  //     let birthday = new Date(formData.fechaNacimiento);
  //     let age = today.getFullYear() - birthday.getFullYear();
  //     let month = today.getMonth() - birthday.getMonth();
  //     if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
  //       age--;
  //     }
  //     formData.edad = age;
  //   };
  //   calculateAge();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formData.fechaNacimiento]);
  const [error, setError] = useState(null);

  return (
    <>
      <div className={styles.inputGroup}>
        <label>Nombre (*)</label>
        <input
          value={formData.nombre}
          type="text"
          name="nombre"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu nombre"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Apellido (*)</label>
        <input
          value={formData.apellido}
          type="text"
          name="apellido"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu apellido"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Rol (*)</label>
        <select onChange={handleChange} name="rol" value={formData.rol}>
          <option value="default" hidden>
            Que rol ocupabas?
          </option>
          <option value="Participante">Participante</option>
          <option value="Jefe de delegación">Jefe de delegación</option>
          <option value="Acompañante">Acompañante</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>Fecha de nacimiento (*)</label>
        <input
          value={formData.fechaNacimiento}
          type="date"
          name="fechaNacimiento"
          onChange={handleChange}
          autoComplete="off"
          // min={dataRange.min}
          // max={dataRange.max}
          placeholder="Ingresá tu apellido"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Tipo de documento (*)</label>
        <select value={formData.tipoDoc} onChange={handleChange} name="tipoDoc">
          <option value="default" hidden>
            Elige tu tipo de documento
          </option>
          <option value="DNI">DNI</option>
          <option value="LE">LE</option>
          <option value="LC">LC</option>
          <option value="CI">CI</option>
          <option value="CUIT">CUIT</option>
          <option value="CUIL">CUIL</option>
          <option value="PAS">PAS</option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>
          Número de {formData.tipoDoc ? formData.tipoDoc : "Documento"} (*)
        </label>
        <input
          value={formData.dni}
          type="text"
          name="dni"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu numero de documento"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Sexo registrado al nacer (*)</label>
        <select
          value={formData.sexoAlNacer}
          onChange={handleChange}
          name="sexoAlNacer"
        >
          <option value="default" hidden>
            Elige tu sexo registrado al nacer (*)
          </option>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="X">X</option>
          <option value="Otro">Otro</option>
          <option value="Prefiero no especificar">
            Prefiero no especificar
          </option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>Como se considera / autopercibe (*)</label>
        <select
          value={formData.autoPercibe}
          onChange={handleChange}
          name="autoPercibe"
        >
          <option value="default" hidden>
            Selecciona como te autopercibes / consideras{" "}
          </option>
          <option value="Mujer">Mujer</option>
          <option value="Mujer trans / travesti">Mujer trans / travesti</option>
          <option value="Varón">Varón</option>
          <option value="Varón trans / masculinidad trans">
            Varón trans / masculinidad trans
          </option>
          <option value="No binario">No binario</option>
          <option value="Otra identidad / ninguna de las anteriores">
            Otra identidad / ninguna de las anteriores
          </option>
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>Pais de nacimiento (*)</label>
        <select
          onChange={handleChange}
          name="paisNacimiento"
          value={formData.paisNacimiento}
        >
          <option value="default" hidden>
            Selecciona tu pais de nacimiento
          </option>
          {[{ name: { common: "Argentina" } }]
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((c) => (
              <option value={c.name.common} key={c.name.common}>
                {c.name.common}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>Otra nacionalidad (*)</label>
        <select
          value={formData.otraNacionalidad}
          onChange={handleChange}
          name="otraNacionalidad"
        >
          <option value="default" hidden>
            Selecciona si tienes otra nacionalidad
          </option>
          <option value="Si">Si</option>
          <option value="No">No</option>
        </select>
      </div>
      {formData.otraNacionalidad === "Si" && (
        <div className={styles.inputGroup}>
          <label>Cual?</label>
          <input
            value={formData.descripcion}
            type="text"
            name="descripcion"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Descripción"
          />
        </div>
      )}
      <div className={styles.inputGroup}>
        <label>Idioma (*)</label>
        <input
          type="text"
          value={formData.idioma}
          onChange={handleChange}
          name="idioma"
        ></input>
      </div>
      <div className={styles.inputGroup}>
        <label>Ex-Achiever (*)</label>
        <div>
          <input
            type="radio"
            checked={formData.exAchiever === "Si"}
            name="exAchiever"
            value="Si"
            onChange={handleChange}
          />{" "}
          Si
          <input
            type="radio"
            checked={formData.exAchiever === "No"}
            name="exAchiever"
            value="No"
            onChange={handleChange}
          />{" "}
          No
        </div>
      </div>
      {formData.exAchiever === "Si" && (
        <div className={styles.inputGroup}>
          <label>Detalle Ex-Achiever</label>
          <input
            placeholder="Detalle"
            type="text"
            onChange={handleChange}
            name="detalleExAchiever"
          />
        </div>
      )}
      <div className={styles.inputGroup}>
        {/* <label>Afiliación principal</label> */}
        <label>Ocupación</label>
        <input
          value={formData.afiliacionPrincipal}
          type="text"
          name="afiliacionPrincipal"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu afiliación"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Teléfono (*)</label>
        <input
          value={formData.telefono}
          type="text"
          name="telefono"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu teléfono"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Teléfono móvil (*)</label>
        <input
          value={formData.telefonoMovil}
          type="text"
          name="telefonoMovil"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu teléfono móvil"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Correo electrónico preferido (*)</label>
        <input
          value={formData.email}
          type="mail"
          name="email"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu correo electrónico"
        />
      </div>
      <div className={styles.inputGroup}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Tengo Whatsapp</label>
          <input
            checked={formData.whatsapp}
            type="checkbox"
            name="whatsapp"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Tengo teléfono fijo</label>
          <input
            checked={formData.telefonoFijo}
            type="checkbox"
            name="telefonoFijo"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label>Dirección actual (*)</label>
        <input
          value={formData.direccion}
          type="text"
          name="direccion"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu correo electrónico"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Barrio (*)</label>
        <input
          value={formData.barrio}
          type="text"
          name="barrio"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu barrio"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Código postal (*)</label>
        <input
          value={formData.codigoPostal}
          type="text"
          name="codigoPostal"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu barrio"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Localidad (*)</label>
        <input
          value={formData.localidad}
          type="text"
          name="localidad"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Ingresá tu localidad"
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Provincia (*)</label>
        <select
          onChange={handleChange}
          value={formData.provincia}
          name="provincia"
        >
          <option hidden>Selecciona tu provincia</option>
          <option>Extranjero</option>
          {[{ nombre: "Córdoba" }].map((p) => (
            <option key={p.nombre}>{p.nombre}</option>
          ))}
        </select>
      </div>
      <div className={styles.inputGroup}>
        <label>País (*)</label>
        <select name="pais" onChange={handleChange} value={formData.pais}>
          <option default>Selecciona tu pais</option>
          {[{ name: { common: "Argentina" } }]
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((c) => (
              <option value={c.name.common} key={c.name.common}>
                {c.name.common}
              </option>
            ))}
        </select>
      </div>
      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.errorIcon}></div>
          <h3 className={styles.error}>{error}</h3>
        </div>
      )}
      <StepButtons
        isValid={true}
        onChange={handleChange}
        changeStep={changeStep}
        step={step}
      />
    </>
  );
};

export default FirstStep;
