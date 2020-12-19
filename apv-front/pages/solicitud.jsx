import React from "react";
import Head from "next/head";
import contacto from "../public/assets/svg/contacto.svg";
import Link from 'next/link';
import arrow from "../public/assets/svg/arrow.svg";
import { Col, Row, Button } from "react-bootstrap";


export default function solicitud() {

    const aacento = "\u00e1";
    const eacento = "\u00e9";
    const iacento = "\u00ed";
    const oacento = "\u00f3";
    const uacento = "\u00fa";
    const enhe = '\u00f1';
    const interrogacion = '\u00BF';
    const comillaIzquierda = '\u201C';
    const comillaDerecha = '\u201D';
    const exclamacion = '\u00A1';

    function redireccion() {
        window.location.href = "https://www.afpmodelo.cl/";
    }


    return (
        <>
            <Head>
                <title>Ahorro Previsional Voluntario | Solicitud de Contacto | AFP Modelo</title>
                <meta name="description" content="Aumenta tu sueldo l{iacento}quido, pagando una menor comisi{oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div className="solicitud" >
                <section>
                    <div className="">
                        <div className="row w-100 container-padre dudas">
                            <div className="col-12 d-flex justify-content-center">
                                <div className="container-block">
                                    <img src={contacto} alt="Contacto Ejecutivo" />
                                    <div className="txt">
                                        <div className="container-title">
                                            <h4>{exclamacion}Tu solicitud fue enviada con {eacento}xito!</h4>
                                            <p>Muchas gracias por utilizar la calculadora de Ahorro Previsional Voluntario, un ejecutivo se contactar{aacento} contigo a la brevedad para entregarte toda la asesor{iacento}a necesaria.</p>
                                            <div className="d-flex justify-content-center mb-5">
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-block mt-3"
                                                    id="webmodelo"
                                                    onClick={redireccion}
                                                >
                                                    Visitar sitio AFP Modelo
                                                </button>
                                            </div>
                                            <Link href="/" passHref>
                                                <a className='volver'>{' '}<img src={arrow} alt="arrow" />Volver atr{aacento}s</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}