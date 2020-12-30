import Head from 'next/head'
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ampolleta from "../public/assets/svg/ampolleta.svg";
import backgroundMobile from "../public/assets/svg/mobiles/backgroundMobile.svg";
import APVForm from "../components/ApvForm";
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import {aacento, eacento,iacento,oacento,uacento,enhe,interrogacion} from '../utils/caracteresUTF8'

export default function Home(props) {
    const router = useRouter()
    const bearer = props.bearer;
    const urlPostSimulacion = props.urlPostSimulacion;

    if (typeof window !== "undefined") {
        localStorage.setItem('sessionId', props.idSesion);
        localStorage.setItem('rut', props.rutConsultaRegimen);
    }

    const headers = {
        "Content-Type": "application/json"
    };

    const body_eventos_regimenes = {
        "sessionId": props.idSesion,
        "eventoId": 0,
        "result0": 0,
        "result1": 0,
        "result2": 0,
        "rut": props.rutConsultaRegimen
    }


    function conocer_regimen_a(e) {
        e.preventDefault()
        body_eventos_regimenes.EventoId = 5;

        axios
            .post(props.urlIngresarEvento, body_eventos_regimenes, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    router.push({
                        pathname: '/regimenA',
                    })
                }
            })
            .catch(e => {
                console.log(e);
            });
        
    }


    function conocer_regimen_b(e) {
        e.preventDefault()
        body_eventos_regimenes.EventoId = 6;


        axios
            .post(props.urlIngresarEvento, body_eventos_regimenes, { headers: headers })
            .then((response) => {
                let data = response.data;

                if (data) {
                    router.push({
                        pathname: '/regimenB',
                    })
                }
            })
            .catch(e => {
                console.log(e);
            });
        
    }

    return (
        <div className="container home">
            <Head>
               
                <title>Ahorro Previsional Voluntario | Simula tu APV | AFP Modelo</title>
                <meta name="description" content={`Aumenta tu sueldo l${iacento}quido, pagando una menor comisi${oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo.`} />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div>
                <section>
                    <div className="row w-100 container-padre calculadora">
                        <div className="col-12 text-center header">
                            <img src={ampolleta} alt="ampolleta" />
                            <div className='container-title title'>
                                <h1>{interrogacion}Por qu{eacento} abrir un APV?</h1>
                                <p>El APV te permite complementar tus ahorros y/o compensar per{iacento}odos no cotizados, para mejorar tu pensi{oacento}n. Dependiendo del r{eacento}gimen tributario que elijas podr{aacento}s recibir un aporte fiscal o rebajar lo ahorrado de tu renta tributable.</p>
                            </div>
                        </div>
                        <img src={backgroundMobile} alt="background" className='background mobile' />
                        <APVForm token={bearer} urlPostSimulacion={urlPostSimulacion} />
                    </div>
                </section>
                <section>
                    <div className="row regimenes">
                        <div className="col-12"><h2>Existen dos r{eacento}gimenes de APV</h2></div>
                        <div className="col-sm-12 col-md-6">
                            <Card>
                                <Card.Header>R{eacento}gimen <span className="circle green-circle">A</span></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        En este el Estado te entrega una bonificaci{oacento}n de un 15% de lo que ahorras en el a{enhe}o con un tope de 6 UTM anuales. Por ejemplo, si ahorras $100.000 recibir{aacento}s $15.000 adicionales, por lo que tu cuenta tendra $115.000.
                                    </Card.Text>
                                    <Link href="/regimenA" passHref>
                                        <Card.Link onClick={conocer_regimen_a}>Saber M{aacento}s</Card.Link>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Card>
                                <Card.Header>R{eacento}gimen  <span className="circle orange-circle">B</span></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        Con este puedes rebajar tu ahorro de tu renta tributable. Esto lo puedes ver reflejado mes a mes en tu liquidaci{oacento}n de sueldo o una vez al a{enhe}o en la operaci{oacento}n renta, seg{uacento}n realices tu aporte.
                                    </Card.Text>
                                    <Link href="/regimenB" passHref>
                                        <Card.Link onClick={conocer_regimen_b}>Saber M{aacento}s</Card.Link>
                                    </Link>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const baseUrl = process.env.URI_BACKEND;
    const apiToken = process.env.URI_GENERATE_TOKEN;
    const uriIngresarSimulacion = process.env.URI_INGRESAR_SIMULACION;
    const urlGetToken = `${baseUrl}${apiToken}`;
    const urlPostSimulacion = `${baseUrl}${uriIngresarSimulacion}`;
    const rutConsultaRegimen = process.env.RUT_CONSULTA_REGIMEN;
    const urlIngresarEvento = `${baseUrl}${process.env.URI_ENVIAR_EVENTO}`;
    const urlDatosPrevisionales = `${baseUrl}${process.env.URI_DATOS_PREVISIONALES}`

    const response = await axios
        .get(urlGetToken);
    const bearer = await response.data.key;
    const idSesion = uuidv4();
    if (!bearer) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    const props= {
        bearer,
        urlPostSimulacion,
        idSesion,
        rutConsultaRegimen,
        urlIngresarEvento
    }

    return { props: props }
}