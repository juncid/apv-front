import { Button } from "react-bootstrap";
import Link from 'next/link';
import Head from "next/head";
import mujerRegimenB from "../public/assets/svg/regimenb.svg";
import arrow from "../public/assets/svg/arrow.svg"
import React from "react";
import backgroundMobile from "../public/assets/svg/mobiles/regimenBmobileBackground.svg";


export default function RegimenB() {

    const aacento = "\u00e1";
    const eacento = "\u00e9";
    const iacento = "\u00ed";
    const oacento = "\u00f3";
    const uacento = "\u00fa";
    const enhe = '\u00f1';
    const interrogacion = '\u00BF';
    const comillaIzquierda = '\u201C';
    const comillaDerecha = '\u201D';

    return (
        <>
            <Head>
                <title>Ahorro Previsional Voluntario | Regimen B | AFP Modelo</title>
                <meta name="description" content="Aumenta tu sueldo l{iacento}quido, pagando una menor comisi{oacento}n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <section>
                <div className="resultado regimenPage">
                    <div className="row">
                        <div className="col-md-10 mx-auto d-flex flex-column title">
                            <h1>R{eacento}gimen B</h1>
                            <h3>Descuento de tu base tributaria.</h3>
                        </div>
                        <img src={backgroundMobile} alt="background" className='background mobile' />
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-1 d-flex flex-column contenedor">
                            <div className='containerParrafo'>
                                <div className='parrafo'>
                                    <h2>Estas son las caracter{iacento}sticas del r{eacento}gimen:</h2>
                                    <br />
                                    <p>En este r{eacento}gimen el monto que aportas en tu APV es descontado de la base tributaria, por lo que tienes un incentivo para el ahorro, al pagar menos impuestos.</p>
                                    <p>El R{eacento}gimen B se recomienda habitualmente a quienes reciben un sueldo mayor a los 3,5 millones mensuales.  No existe un m{iacento}nimo para aportar, pero s{iacento} un m{aacento}ximo de 600 UF anuales en todo el sistema.</p>
                                    <p>Dependiendo de c{oacento}mo hagas tus dep{oacento}sitos el beneficio tributario lo puedes ver en tu liquidaci{oacento}n de sueldo mes a mes o en la operaci{oacento}n renta en abril de cada a{enhe}o.
Si bien los fondos tienen como fin aportar a tu jubilaci{oacento}n, puedes hacer retiro de ellos, pero se descontar{aacento} un 15% cada retiro que hagas a modo de retenci{oacento}n como pago provisional de impuestos para la operaci{oacento}n renta del a{enhe}o siguiente.</p>
                                    <p>En caso que quieras hacer un ahorro que puedas retirar, te recomendamos que abras una Cuenta 2, que te permite invertir en los mismos multifondos de tu AFP con una baja comisi{oacento}n de administraci{oacento}n.</p>
                                </div>
                                <div className='parrafo'>
                                    <h2>Esto quiere decir: </h2>
                                    <br />
                                    <p>
                                        <span>El ahorro descuenta de tu renta tributable</span><br />
                                        <span>No hay un m{iacento}nimo de aporte y tiene un m{aacento}ximo de 600 UF anuales.</span><br />
                                        <span>Tiene como objetivo aumentar tu pensi{oacento}n.</span><br />
                                    </p>
                                </div>
                            </div>
                            <Link href="/regimenA" passHref shallow>
                                <button type="button" className="btn btn-lg btn-block purple">Ver r{eacento}gimen A</button>
                            </Link>
                            <br />
                            <Link href="/" passHref>
                                <a className='volver'>{' '}<img src={arrow} alt="arrow" />Ir a la p{aacento}gina de inicio</a>
                            </Link>

                        </div>
                        <div className="col-md-2 d-flex desktop">
                            <img
                                src={mujerRegimenB}
                                alt="regimen B"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}