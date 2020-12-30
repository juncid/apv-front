import axios from "axios";
import { Formik, useFormik, Form } from "formik";
import Head from "next/head";
import React, { useEffect, useState } from 'react';
import { Card, Col, Table, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MaskedInput from "react-text-mask";
import * as Yup from 'yup';

import ResultadoModal from '../components/ResultadoModal';
import Loader from '../components/Loader';
import HeaderRecomendacion from '../components/HeaderRecomendacion';

import { fetchposts } from "../store/actions/postAction";
import { dineroMask } from "../utils/inputMask"
import { cleanDigitos } from '../utils/cleanInputMask';
import {eacento, iacento, oacento, uacento, interrogacion} from '../utils/caracteresUTF8';

import mujerSAC from "../public/assets/svg/mujersac.svg"


export default function Resultado(props) {

    const headers = {
        "Content-Type": "application/json"
    };

    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const [regimenData, setRegimenData] = useState({});

    const initialValues = {
        ahorro: ''
    }


    const handleSubmit = values => {
        setIsLoading(true);

        const nombre = regimenData.nombre !== undefined && regimenData.nombre;
        const rutPrimero = regimenData.rut !== undefined && regimenData.rut;
        const rutDv = regimenData.rutDv !== undefined && regimenData.rutDv;
        const rut = rutPrimero + "-" + rutDv;
        const correo = regimenData.correo !== undefined && regimenData.correo;
        const celular = regimenData.celular !== undefined && regimenData.celular;
        const sueldo = regimenData.sueldoLiquidoConsulta !== undefined && regimenData.sueldoLiquidoConsulta;


        const body = {
            nombre: nombre,
            rut: rut,
            correo: correo,
            celular: celular,
            sueldo: sueldo,
            ahorro: cleanDigitos(values.ahorro)
        };

        axios
            .post(props.urlIngresarSimulacion, body, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data.idSimulacion) {
                    setRegimenData(data);
                }

                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
            });
    };


    const validationSchema = Yup.object({
        ahorro: Yup
            .string()
            .transform(value => value.replace(/[^\d]/g, ''))
            .matches(/^[0-9]+$/, `Ingrese el monto en pesos que desea ahorrar desde $1.000.`)
            .test('Sueldo-validacion', `Ingrese un monto desde $1.000.`, function (value) {
                return (value >= 1000)
            })
            .test('Ahorro-validacion', `El monto del ahorro no puede superar al sueldo ingresado.`, function (value) {
                const sueldo = regimenData.sueldoLiquidoConsulta !== undefined && regimenData.sueldoLiquidoConsulta;
                return (value <= sueldo)
            })
            .required('Por favor ingrese el monto que desea ahorrar desde $1.000.'),
    });

    const formik = useFormik({
        initialValues,
        handleSubmit,
        validationSchema
    });

    useEffect(() => {
        setRegimenData(props.data);
    }, []);

    useEffect(() => {
        console.log(regimenData);
    }, [regimenData]);

    let data_resultado = {
        'sueldoLiquido': regimenData.sueldoLiquidoConsulta !== undefined && regimenData.sueldoLiquidoConsulta,
        'ahorroMensual': regimenData.aporteApv !== undefined && regimenData.aporteApv,
        'recomendacionApv': regimenData.recomendacionApv !== undefined && regimenData.recomendacionApv,
        'ahorroMensualRegimenA': regimenData.mixtoApvA !== undefined && Math.round(regimenData.mixtoApvA),
        'ahorroMensualRegimenB': regimenData.mixtoApvB !== undefined && Math.round(regimenData.mixtoApvB),
        'mixtoBeneficioApvB': regimenData.mixtoBeneficioApvB !== undefined && Math.round(regimenData.mixtoBeneficioApvB),
        'mixtoBeneficioApvA': regimenData.mixtoBeneficioEfectivoApvA !== undefined && Math.round(regimenData.mixtoBeneficioEfectivoApvA),
        'mixtoBeneficioTotal': regimenData.mixtoBeneficioTotal !== undefined && Math.round(regimenData.mixtoBeneficioTotal),
        'beneficio': 0,
        'total':0
    }

    console.log(data_resultado);
    const sueldoLiquido = regimenData.sueldoLiquidoConsulta !== undefined && regimenData.sueldoLiquidoConsulta;
    const ahorroMensual = regimenData.aporteApv !== undefined && regimenData.aporteApv;
    const recomendacionApv = regimenData.recomendacionApv !== undefined && regimenData.recomendacionApv;
    const ahorroMensualRegimenA = regimenData.mixtoApvA !== undefined && Math.round(regimenData.mixtoApvA);
    const ahorroMensualRegimenB = regimenData.mixtoApvB !== undefined && Math.round(regimenData.mixtoApvB);
    const mixtoBeneficioApvB = regimenData.mixtoBeneficioApvB !== undefined && Math.round(regimenData.mixtoBeneficioApvB);
    const mixtoBeneficioApvA = regimenData.mixtoBeneficioEfectivoApvA !== undefined && Math.round(regimenData.mixtoBeneficioEfectivoApvA);
    const mixtoBeneficioTotal = regimenData.mixtoBeneficioTotal !== undefined && Math.round(regimenData.mixtoBeneficioTotal);
    let beneficio = 0;
    let total = 0;

    if (recomendacionApv === 'A') {
        beneficio = regimenData.beneficioRegA;
        total = ahorroMensual + beneficio;
    } else if (recomendacionApv === 'B') {
        beneficio = regimenData.beneficioRegB;
        total = regimenData.sueldoLiquidoConApvregB;
    } else if (recomendacionApv === 'M') {
        total = (sueldoLiquido - ahorroMensualRegimenA) - (ahorroMensualRegimenB-mixtoBeneficioApvB)
        total = Math.round(total)
    }

    const rutPrimero = regimenData.rut !== undefined && regimenData.rut;
    const rutDv = regimenData.rutDv !== undefined && regimenData.rutDv;
    const rut = rutPrimero + "-" + rutDv;
    const body_eventos = {
        "sessionId": "string",
        "eventoId": 0,
        "result0": regimenData.sueldoLiquidoConApvregA !== undefined && regimenData.sueldoLiquidoConApvregA,
        "result1": regimenData.sueldoLiquidoConApvregB !== undefined && regimenData.sueldoLiquidoConApvregB,
        "result2": 0,
        "rut": rut
    }

    function contactarme() {

        body_eventos.EventoId = 8;
        axios
            .post(props.urlIngresarEvento, body_eventos, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    window.location.href = "/solicitud";
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    function apertura_afiliado() {
        body_eventos.EventoId = 10;

        axios
            .post(props.urlIngresarEvento, body_eventos, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    window.location.href = "https://www.afpmodelo.cl/Portal-Afiliado/Operaciones/Ahorro-Previsional-Voluntario/Mi-APV/Abrir-un-APV-Paso1.aspx?acceder&utm_source=QueAPVConviene&utm_medium=referal&utm_campaign=QueAPVConviene&utm_content=BotonAccion";
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    const dudas_texto =
        `Nuestros ejecutivos pueden asesorarte en l${iacento}nea o v${iacento}a tel${eacento}fonica. Queremos ayudarte a resolver todas tus inquietudes o darte todas las opciones para tu traspaso.`;

    return (
        <>
            <Head>
                <title>Ahorro Previsional Voluntario | Resultado Simulaci{oacento}n | AFP Modelo</title>
                <meta name="description" content={`Aumenta tu sueldo l${iacento}quido, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo.`} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <section>
                <div className="resultado">
                    <HeaderRecomendacion
                        recomendacionApv={recomendacionApv}
                    />
                  
                    <div className="row">
                        <div className="col-md-6 offset-md-1 d-flex">
                            <Card>
                                <Card.Body>
                                    <Card.Text>Estos son los datos de tu simulaci{oacento}n:</Card.Text>
                                    {isLoading ?
                                        <Loader />
                                        : <>
                                            <Table responsive
                                                className="table-borderless"
                                            >
                                                <thead>
                                                    <tr>
                                                        <th>{''}</th>
                                                        <th className="text-right">Regimen {recomendacionApv === 'M' ? 'Mixto' : recomendacionApv}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {recomendacionApv === 'M'
                                                        ? <>
                                                            <tr>
                                                                <td>Sueldo l{iacento}quido:</td>
                                                                <td className="text-right">${sueldoLiquido.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ahorro mensual R{eacento}gimen A:</td>
                                                                <td className="text-right">${ahorroMensualRegimenA.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ahorro mensual R{eacento}gimen B:</td>
                                                                <td className="text-right">${ahorroMensualRegimenB.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="green-tabla">Descuento tributario</td>
                                                                <td className="text-right green-tabla">${mixtoBeneficioApvB.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Nuevo sueldo l{iacento}quido:</td>
                                                                <td className="text-right">${total.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="green-tabla">Bonificaci{oacento}n fiscal:</td>
                                                                <td className="text-right green-tabla">${mixtoBeneficioApvA.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total Beneficios:</td>
                                                                <td className="text-right">${mixtoBeneficioTotal.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                        </> :
                                                        <>
                                                            <tr>
                                                                <td>Sueldo l{iacento}quido:</td>
                                                                <td className="text-right">${sueldoLiquido.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ahorro mensual:</td>
                                                                <td className="text-right">${ahorroMensual.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="green-tabla">{recomendacionApv === 'A' ? `Bonificaci${oacento}n fiscal:` : 'Descuento tributario:'}</td>
                                                                <td className="text-right green-tabla">${beneficio.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{recomendacionApv === 'A' ? 'Total ahorro:' : `Nuevo sueldo l${iacento}quido:`}</td>
                                                                <td className="text-right">${total.toLocaleString("es-CL")}</td>
                                                            </tr>
                                                        </>
                                                    }
                                                    
                                                </tbody>
                                            </Table>
                                            <div className='col-12 text-center'>
                                                <Card.Link className='volver modal-wizard' onClick={handleShow}>Ver detalles de mi simulaci{oacento}n</Card.Link>
                                            </div>
                                            <ResultadoModal
                                                show={modalShow}
                                                onHide={handleClose}
                                                data={regimenData !== undefined && regimenData}
                                            />
                                        </>
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 d-flex flex-column calcularApv">
                            <div className="row">
                                <Card>
                                    <Card.Header><p>Calcular tu APV con otro monto:</p></Card.Header>
                                    <Card.Body>
                                        <Formik
                                            initialValues={initialValues}
                                            onSubmit={handleSubmit}
                                            validationSchema={validationSchema}
                                        >
                                            {(formik) => (
                                                <Form className='form-inline'>
                                                    <div className="form-group input-wrapper d-block">
                                                        <MaskedInput
                                                            type="text"
                                                            mask={dineroMask}
                                                            className={`form-control form-control-lg ${formik.touched.ahorro ? (formik.errors.ahorro ? "is-invalid" : "is-valid") : ""}`}
                                                            id="ahorro"
                                                            name="ahorro"
                                                            aria-describedby="ahorroAyuda"
                                                            placeholder="Ahorro Mensual"
                                                            {...formik.getFieldProps('ahorro')}
                                                        />
                                                        <small
                                                            id="ahorroAyuda"
                                                            className={`form-text ${formik.touched.ahorro && formik.errors.ahorro && 'is-invalid'}`}
                                                        >
                                                            {formik.touched.ahorro && formik.errors.ahorro}
                                                        </small>
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <div className="col justify-content-center d-flex">
                                                            <button
                                                                type="submit"
                                                                id="calcular"
                                                                className="volver"
                                                                disabled={!(formik.isValid && formik.dirty)}
                                                            >
                                                                Calcular
                                            </button>
                                                        </div>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="row detalle">
                                <small>*Renta tributable contempla descuentos legales, ahorro al fondo de pensiones (10%), comisi{oacento}n AFP Modelo (0,77%) y salud (7%).**Bonificaci{oacento}n fiscal de un 15% de tu ahorro voluntario mensual con un tope de 6 UTM anuales.</small>
                            </div>
                        </div>
                    </div>
                    <div className='row ctas'>
                        <div className="col-md-4 text-center d-block offset-md-2 container">
                            <p>{interrogacion}Eres afiliado? Haz login para comenzar tu proceso de apertura</p>
                            <div className='d-flex justify-content-center'>
                                <button
                                    type="button"
                                    id="Apertura_Afiliado"
                                    className="btn btn-lg btn-block"
                                    onClick={apertura_afiliado}
                                >Abrir mi APV</button>
                            </div>
                        </div>
                        <div className="col-md-5 text-center d-block container">
                            <p>{interrogacion}No eres afiliado? Nuestros ejecutivos te contactaran para asesorarte en la apertura.</p>
                            <div className='d-flex justify-content-center'>
                                <button type="button" id="Apertura_no_Afiliado" className="btn btn-lg btn-block blueBtn" onClick={contactarme}>Solicitar contacto</button>
                            </div>
                        </div>
                    </div>
                    <div className="row container-padre dudas">
                        <div className="col-md-2 d-flex desktop">
                            <img src={mujerSAC} alt="Dudas" />
                        </div>
                        <div className="col-sm-12 col-md-6 offset-md-2 d-flex flex-column contenedor">
                            <div className="txtDesktop parrafo2">
                                <div className="container-title">
                                    <h2>{interrogacion}A{uacento}n tienes dudas?</h2>
                                    <p>{dudas_texto}</p>
                                    <button type="button" id="Solicitud_Contacto" className="btn btn-lg btn-block whiteBtn" onClick={contactarme}>Quiero que me contacten</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    const uriBackend = process.env.URI_BACKEND;
    const urlIngresarSimulacion = `${uriBackend}${process.env.URI_INGRESAR_SIMULACION}`;
    const urlIngresarEvento = `${uriBackend}${process.env.URI_ENVIAR_EVENTO}`
    const { id } = context.query;
    const response = await axios
        .get(`${uriBackend}${process.env.URI_OBTENER_SIMULACION}?id=${id}`)
        
    const data = await response.data
    
    const props = {
        data,
        urlIngresarSimulacion,
        urlIngresarEvento
    }

    return { props: props }
}