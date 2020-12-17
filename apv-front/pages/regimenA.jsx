import Link from 'next/link';
import Head from "next/head";
import hombreRegimenA from "../public/assets/svg/regimena.svg";
import React from "react";
import arrow from "../public/assets/svg/arrow.svg";
import backgroundMobile from "../public/assets/svg/mobiles/regimenAmobileBackground.svg";

export default function RegimenA() {

    return (
        <>
            <Head>
                <title>Ahorro Previsional Voluntario | Regimen A | AFP Modelo</title>
                <meta name="description" content="Aumenta tu sueldo l�quido, pagando una menor comisi�n de AFP. Simula tu aumento de sueldo al cambiarte a AFP Modelo." />
                <meta name="robots" content="noindex, follow" />
            </Head>
            <section>
                <div className="resultado regimenPage">
                    <div className="row">
                        <div className="col-md-10 mx-auto d-flex flex-column title">
                            <h1>R�gimen A</h1>
                            <h3>Bonificaci�n fiscal de un 15% de lo ahorrado.</h3>
                        </div>
                        <img src={backgroundMobile} alt="background" className='background mobile' />
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 offset-md-1 d-flex flex-column contenedor">
                            <div className='containerParrafo'>
                                <div className='parrafo'>
                                    <h2>Estas son las caracter�sticas del r�gimen:</h2>
                                    <br />
                                    <p>En este r�gimen el Estado te bonifica con un 15% de lo que ahorras en tu APV con un tope de 6 UTM (aproximadamente 306.000) de lo que ahorras cada a�o. Por lo tanto si aportas 2 millones en APV durante el a�o puedes obtener el m�ximo de esta bonificaci�n.</p>
                                    <p>El R�gimen A se recomienda habitualmente a quienes reciben un sueldo menor a los 3,5 millones mensuales.  No existe un m�nimo para aportar, por lo tanto puedes empezar ahora  para mejorar tu pensi�n, mientras antes empieces m�s tiempo tendr� tu inversi�n para rentar.</p>
                                    <p>Si bien los fondos tienen como fin aportar a tu jubilaci�n, puedes hacer retiro de ellos, pero se descontar� un 15% cada retiro que hagas para devolver el aporte que el fisco realiz� en tu cuenta. </p>
                                    <p>En caso que quieras hacer un ahorro que puedas retirar te recomendamos que abras una Cuenta 2, que te permite invertir en los mismos multifondos de tu AFP con una baja comisi�n de administraci�n.</p>
                                </div>
                                <div className='parrafo'>
                                    <h2>Esto quiere decir: </h2>
                                    <br />
                                    <p>
                                        <span>El estado bonifica hasta 306.000 al a�o (6 UTM).</span><br />
                                        <span>No hay un m�nimo de aporte.</span><br />
                                        <span>Tiene como objetivo aumentar tu pensi�n.</span><br />
                                    </p>
                                </div>
                            </div>
                            <Link href="/regimenB" passHref>
                                <button type="button" className="btn btn-lg btn-block purple">Ver r�gimen B</button>
                            </Link>
                            <br />
                            <Link href="/" passHref>
                                <a className='volver'>{' '}<img src={arrow} alt="arrow" />Ir a la p�gina de inicio</a>
                            </Link>

                        </div>
                        <div className="col-md-2 d-flex desktop">
                            <img
                                src={hombreRegimenA}
                                alt="regimen A"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}