import React from "react";
import { Accordion, Card } from "react-bootstrap";


const Preguntas = () => {

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
        <section>
            <div className="col-12 col-lg-10 block mx-auto justify-content-center">
                <h4>Preguntas frecuentes</h4>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {interrogacion}Que es un APV?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>
                                    Ahorro Previsional Voluntario o APV es un instrumento adicional complementario al ahorro que realizas en tu cuenta obligatoria de la AFP. Su objetivo es aumentar el monto de la pensi{oacento}n, compensar per{iacento}odos no cotizados.
                                </p>
                                <p>
                                    Tienen incentivos al ahorro en los cuales puedes recibir una bonificaci{oacento}n por parte del Estado, como tambi{eacento}n rebajar de impuestos dependiendo del r{eacento}gimen tributario que escojas.
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            {interrogacion}Cu{aacento}les son los reg{iacento}menes tributarios?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p>
                                    Puedes hacer tus aportes en APV en al menos uno de los reg{iacento}menes tributarios. En el r{eacento}gimen {comillaIzquierda}A{comillaDerecha} el Estado bonifica un 15% de lo que ahorras anualmente con un tope de 6 UTM (aproximadamente $306.000) y en el caso del r{eacento}gimen {comillaIzquierda}B{comillaDerecha}, lo que aportas descuenta de tu renta tributaria, lo que hace disminuir tu carga de impuestos.
                                </p>
                                <p>
                                    Tienen incentivos al ahorro en los cuales puedes recibir una bonificaci{oacento}n por parte del Estado, como tambi{eacento}n rebajar de impuestos dependiendo del r{eacento}gimen tributario que escojas.
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            {interrogacion}Puedo retirar o hacer giros del APV?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p>
                                    S{iacento}, pero ten en cuenta que estos ahorros est{aacento}n pensados en el largo plazo y con el objetivo de aumentar tu pensi{oacento}n al momento de jubilar. Al hacer retiros de estos ahorros perder{aacento}s el aporte estatal del 15% del r{eacento}gimen A o pagar{aacento}s impuestos de segunda categor{iacento}a en la operaci{oacento}n renta del a{enhe}o siguiente.
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            {interrogacion}Que es un APV 2?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </section>

    );
}

export default Preguntas;