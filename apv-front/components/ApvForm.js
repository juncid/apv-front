
import React, { useState, useEffect } from "react";
import { Field } from "formik";
import { Wizard, WizardStep } from "./WizardComponent";
import { Step1Schema, Step2Schema, Step3Schema } from "../utils/validationSchemaWizard";
import { useRouter } from 'next/router';
import axios from 'axios';
import MaskedInput from "react-text-mask";
import { celularMask, dineroMask, rutMask } from "../utils/inputMask"
import { cleanDigitos, cleanRut } from "../utils/cleanInputMask"

const APVForm = (props) => {

    const aacento = "\u00e1";
    const eacento = "\u00e9";
    const iacento = "\u00ed";
    const oacento = "\u00f3";
    const uacento = "\u00fa";
    const enhe = '\u00f1';
    const interrogacion = '\u00BF';

    const router = useRouter()

    const initialValues = {
        nombre: '',
        rut: '',
        correo: '',
        celular: '',
        sueldo: '',
        ahorro: '',
        terminosycondiciones: false,
    };

    return (
        <div className='wizardForm'>
            <Wizard
                initialValues={initialValues}
                onSubmit={values => {
                    const headers = {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${props.token}`
                    };

                    const url = `${props.urlPostSimulacion}`;

                    const body = {
                        nombre: values.nombre,
                        rut: cleanRut(values.rut),
                        correo: values.correo,
                        celular: cleanDigitos(values.celular),
                        sueldo: cleanDigitos(values.sueldo),
                        ahorro: cleanDigitos(values.ahorro)
                    };

                    axios
                        .post(url, body, { headers: headers })
                        .then((response) => {
                            let data = response.data;


                            if (data.idSimulacion) {
                                router.push({
                                    pathname: "/resultado",
                                    query: {
                                        id: data.idSimulacion,
                                    },
                                });
                            }
                        })
                        .catch(e => {
                            console.log(e);
                        });
                        
                }}
            >
                <WizardStep
                    onSubmit={() => console.log('Step1 onSubmit')}
                    validationSchema={Step1Schema}
                >
                   
                    <div className="form-group input-wrapper">
                        <label
                            htmlFor="sueldo"
                            className={"control-label"}>sueldo
                                </label>
                        <Field name="sueldo"
                        >
                            {({
                                field,
                                form: { touched, errors },
                            }) => (
                                    <>
                                        <MaskedInput
                                            {...field}
                                            type="text"
                                            mask={dineroMask}
                                            className={`form-control form-control-lg ${touched.sueldo ? (errors.sueldo ? "is-invalid" : "is-valid") : ""}`}
                                            id="sueldo"
                                            aria-describedby="sueldoAyuda"
                                            placeholder={`Sueldo L${iacento}quido`}
                                        />
                                        <small
                                            id="sueldoAyuda"
                                            className={`form-text 
                                                    ${touched.sueldo && errors.sueldo ? "is-invalid" : ""}`}
                                        >
                                            {touched.sueldo && errors.sueldo
                                                ? errors.sueldo
                                                : `El sueldo l${iacento}quido que recibes luego de los descuentos legales.`}
                                        </small>
                                    </>
                                )}
                        </Field>
                    </div>
                    <div className="form-group input-wrapper">
                        <label
                            htmlFor="ahorro"
                            className="control-label"
                        >
                            Monto Ahorro
                                </label>
                        <Field name="ahorro">
                            {({
                                field,
                                form: { touched, errors },
                            }) => (
                                    <>
                                        <MaskedInput
                                            {...field}
                                            type="text"
                                            mask={dineroMask}
                                            className={`form-control form-control-lg ${touched.ahorro ? (errors.ahorro ? "is-invalid" : "is-valid") : ""}`}
                                            id="ahorro"
                                            aria-describedby="ahorroAyuda"
                                            placeholder="Ahorro Mensual"
                                        />
                                        <small
                                            id="ahorroAyuda"
                                            className={`form-text ${touched.ahorro && errors.ahorro ? "is-invalid" : ""}`}
                                        >
                                            {touched.ahorro && errors.ahorro
                                                ? errors.ahorro
                                                : `El monto en pesos que invertir${iacento}as en tu APV.`}
                                        </small>
                                    </>
                                )}
                        </Field>
                    </div>
                </WizardStep>
                <WizardStep
                    onSubmit={() => console.log('Step2 onSubmit')}
                    validationSchema={Step2Schema}
                >
                    <div className="form-group input-wrapper">
                        <label
                            htmlFor="nombre"
                            className="control-label"
                        >
                            Nombre
                                </label>
                        <Field name="nombre">
                            {({
                                field,
                                form: { touched, errors },
                            }) => (
                                    <>
                                        <input
                                            {...field}
                                            type="text"
                                            className={`form-control form-control-lg ${touched.nombre ? (errors.nombre ? "is-invalid" : "is-valid") : ""}`}
                                            id="nombre"
                                            aria-describedby="nombreAyuda"
                                            placeholder="Nombre"
                                        />
                                        <small
                                            id="nombreAyuda"
                                            className={`form-text ${touched.nombre && errors.nombre ? "is-invalid" : ""
                                                }`}
                                        >
                                            {touched.nombre && errors.nombre
                                                ? errors.nombre
                                                : "Indicanos tu nombre y apellido."}
                                        </small>
                                    </>
                                )}
                        </Field>
                    </div>
                    <div className="form-group input-wrapper">
                        <label
                            htmlFor="rut"
                            className="control-label"
                        >
                            RUT
                                </label>
                        <Field name="rut">
                            {({
                                field,
                                form: { touched, errors },
                            }) => (
                                    <>
                                        <MaskedInput
                                            {...field}
                                            type="text"
                                            mask={rutMask}
                                            className={`form-control form-control-lg ${touched.rut ? (errors.rut ? "is-invalid" : "is-valid") : ""}`}
                                            id="rut"
                                            aria-describedby="rutAyuda"
                                            placeholder="RUT"
                                        />
                                        <small
                                            id="rutAyuda"
                                            className={`form-text ${touched.rut && errors.rut ? "is-invalid" : ""}`}
                                        >
                                            {touched.rut && errors.rut
                                                ? errors.rut
                                                : "Ej. 12.345.678-9."}
                                        </small>
                                    </>
                                )}
                        </Field>
                    </div>
                </WizardStep>
                <WizardStep
                    onSubmit={() => console.log('Step3 onSubmit')}
                    validationSchema={Step3Schema}
                >
                    <div className="form-group input-wrapper">
                        <label
                            htmlFor="correo"
                            className="control-label"
                        >
                            Correo
                                </label>
                        <Field name="correo">
                            {({
                                field,
                                form: { touched, errors },
                            }) => (
                                    <>
                                        <input
                                            {...field}
                                            type="email"
                                            className={`form-control form-control-lg ${touched.correo ? (errors.correo ? 'is-invalid' : 'is-valid') : ''
                                                }`}
                                            id="correo"
                                            aria-describedby="correoAyuda"
                                            placeholder="Correo"
                                        />
                                        <small
                                            id="correoAyuda"
                                            className={`form-text ${touched.correo && errors.correo & "is-invalid"}`}
                                        >
                                            {touched.correo && errors.correo
                                                ? errors.correo
                                                : "Ej. aumentatusueldo@afpmodelo.cl"}
                                        </small>
                                    </>
                                )}
                        </Field>
                    </div>
                    <div className="form-group input-wrapper">
                        <label
                            htmlFor="celular"
                            className="control-label"
                        >
                            Celular
                                </label>
                        <Field name="celular">
                            {({
                                field,
                                form: { touched, errors },
                            }) => (
                                    <>
                                        <MaskedInput
                                            {...field}
                                            type="text"
                                            mask={celularMask}
                                            className={`form-control form-control-lg ${touched.celular ? (errors.celular ? "is-invalid" : "is-valid") : ""}`}                                            
                                            id="celular"
                                            aria-describedby="celularAyuda"
                                            placeholder={`9 ____ ____`}
                                        />
                                      
                                        <small
                                            id="celularAyuda"
                                            className={`form-text ${touched.celular && errors.celular && "is-invalid"}`}
                                        >
                                            {touched.celular && errors.celular ? errors.celular : "Ej. 9 1112 23XX"}
                                        </small>
                                    </>
                                )}
                        </Field>
                    </div>
                    
                </WizardStep>
            </Wizard>
        </div>
    );
};



export default APVForm;