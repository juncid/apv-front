import Head from 'next/head'
import ahorro from "../public/assets/svg/ahorro.svg"
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ampolleta from "../public/assets/svg/ampolleta.svg";
import backgroundMobile from "../public/assets/svg/mobiles/backgroundMobile.svg";
import APVForm from "../components/ApvForm";
import axios from 'axios';
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';


export default function Home(props) {
    const bearer = props.bearer;

    if (typeof window !== "undefined") {
        const sessionId = uuidv4();
        localStorage.setItem('sessionId', sessionId);
    }

    return (
        <div className="container home">
            <Head>
                <title>Aumenta tu Sueldo | Solicitud de Contacto | AFP Modelo</title>
                <meta name="description" content="Aumenta tu sueldo l�quido, pagando una menor comisi�n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <div>
                <section>
                    <div className="row w-100 container-padre calculadora">
                        <div className="col-12 text-center header">
                            <img src={ampolleta} alt="ampolleta" />
                            <div className='container-title title'>
                                <h1>�Por qu� abrir un APV?</h1>
                                <p>El APV te permite complementar tus ahorros y/o compensar per�odos no cotizados, para mejorar tu pensi�n. Dependiendo del r�gimen tributario que elijas podr�s recibir un aporte fiscal o rebajar lo ahorrado de tu renta tributable.</p>
                            </div>
                        </div>
                        <img src={backgroundMobile} alt="background" className='background mobile' />
                        <APVForm token={bearer} />
                    </div>
                </section>
                <section>
                    <div className="row regimenes">
                        <div className="col-12"><h2>Existen dos r�gimenes de APV</h2></div>
                        <div className="col-sm-12 col-md-6">
                            <Card>
                                <Card.Header>R�gimen <span className="circle green-circle">A</span></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>En este el Estado te entrega una bonificaci�n de un 15% de lo que ahorras en el a�o con un tope de 6 UTM anuales. Por ejemplo, si ahorras $100.000 recibir�s $15.000 adicionales, por lo que tu cuenta tendra $115.000.</p>
                                    </Card.Text>
                                    <Link href="/regimenA" passHref>
                                        <Card.Link>Saber M�s</Card.Link>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <Card>
                                <Card.Header>R�gimen  <span className="circle orange-circle">B</span></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <p>Con este puedes rebajar tu ahorro de tu renta tributable. Esto lo puedes ver reflejado mes a mes en tu liquidaci�n de sueldo o una vez al a�o en la operaci�n renta, seg�n realices tu aporte.</p>
                                    </Card.Text>
                                    <Link href="/regimenB" passHref>
                                        <Card.Link>Saber M�s</Card.Link>
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
    const response = await axios
        .get(`${baseUrl}${apiToken}`);
    const bearer = await response.data.key;

    if (!bearer) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return { props: { bearer } }
}