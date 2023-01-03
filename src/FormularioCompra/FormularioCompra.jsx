import React, { useEffect, useState } from "react";
import styles from "./FormularioCompra.module.css";
import FirstStep from "./FormStepOne";
import SecondStep from "./FormStepTwo";
import ThirdStep from "./FormStepThree";
import FormStepMP from "./FormStepMP";
import { useLocation } from "react-router-dom";
import FormStepPaypal from "./FormStepPaypal";

const FormularioCompra = () => {
  const location = useLocation();
  const ref = React.useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = React.useState({
    autorizacionUsoDeImagen: "",
    codigoDeConv: "",
    seguroMedicoFile: "",
    frenteDNI: "",
    dorsoDNI: "",
    autorizacionPadres: "",
  });
  const [step, setStep] = React.useState(0);
  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);
  const [formData, setFormData] = React.useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    edad: "",
    tipoDoc: "",
    dni: "",
    sexoAlNacer: "",
    autoPercibe: "",
    paisNacimiento: "",
    otraNacionalidad: "",
    descripcion: "",
    idioma: "",
    exAchiever: "",
    detalleExAchiever: "",
    afiliacionPrincipal: "",
    telefono: "",
    telefonoMovil: "",
    email: "",
    telefonoFijoCheckbox: false,
    whatsapp: false,
    direccion: "",
    barrio: "",
    codigoPostal: "",
    localidad: "",
    provincia: "",
    pais: "",
    delegacion: "",
    rol: "",
    nivelDeEstudios: "",
    añosDeEstudios: "",
    ingles: "",
    nivelIngles: "",
    otrosIdiomas: "",
    comoConocisteFie: "",
    seguroMedico: "",
    numeroSeguro: "",
    vencimientoSeguro: "",
    restriccionAlimentaria: "",
    alimentosNoPuedeConsumir: "",
    alergias: "",
    queAlergias: "",
    grupoSanguineo: "",
    atencionEspecial: "",
    motivosDeAtencion: "",
    medicamentoRegular: "",
    nombreTutor: "",
    apellidoTutor: "",
    mailTutor: "",
    telefonoTutor: "",
    pagado: "Si",
  });
  useEffect(() => {
    const calculateAge = () => {
      let today = new Date();
      let birthday = new Date(formData.fechaNacimiento);
      let age = today.getFullYear() - birthday.getFullYear();
      let month = today.getMonth() - birthday.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }
      setFormData({ ...formData, edad: age });
    };
    calculateAge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.fechaNacimiento]);
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.type === "file"
        ? e.target.files[0]
        : e.target.value;
    if (e.target.type === "file") {
      setImages({
        ...images,
        [e.target.name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    }
  };

  const changeStep = (num) => {
    if (typeof window !== "undefined" && ref.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setStep((prev) => prev + num);
  };

  const saveFiles = async () => {
    changeStep(1);
  };

  return (
    <div className={styles.container}>
      <h2 ref={ref}>
        Completa el siguiente formulario para comprar tu entrada
      </h2>
      <div className={styles.form}>
        {step === 0 && (
          <FirstStep
            formData={formData}
            handleChange={handleChange}
            step={step}
            changeStep={changeStep}
          />
        )}
        {step === 1 && (
          <SecondStep
            formData={formData}
            handleChange={handleChange}
            step={step}
            changeStep={changeStep}
          />
        )}
        {step === 2 && (
          <ThirdStep
            formData={formData}
            handleChange={handleChange}
            step={step}
            changeStep={changeStep}
            images={images}
            buttonError={error}
            loading={loading}
            saveFiles={saveFiles}
          />
        )}
        {step === 3 && location.pathname === "/pagos/argentinos" && (
          <FormStepMP
            formData={formData}
            handleChange={handleChange}
            step={step}
            changeStep={changeStep}
            images={images}
            buttonError={error}
            loading={loading}
          />
        )}
        {step === 3 && location.pathname === "/pagos/extranjeros" && (
          <FormStepPaypal
            formData={formData}
            handleChange={handleChange}
            step={step}
            changeStep={changeStep}
            images={images}
            buttonError={error}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default FormularioCompra;
