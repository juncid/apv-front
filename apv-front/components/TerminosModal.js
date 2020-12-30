import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function TerminosModal(props) {

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
        <div>
            <Modal
                {...props}
                dialogClassName="modal-50w"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        T{eacento}rminos y condiciones del servicio.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Al hacer click en el bot{oacento}n {comillaIzquierda}calcular{comillaDerecha} acepto enviar los datos solicitados en
                        el formulario, para contacto posterior tanto a trav{eacento}s de medio digitales,
                        env{iacento}o de correo electr{oacento}nico y/o contacto telef{oacento}nico con el objetivo de
                        informar o asistirme en el proceso de suscripci{oacento}n de servicios por parte de
                        AFP Modelo.
                    </p>
                    <p>
                        Esta informaci{oacento}n no ser{aacento} utilizada con un fin diferente al indicado ni
                        compartida con otras empresas con otros fines diferentes al expresamente
                        autorizado.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-lg btn-block purple' onClick={props.onHide}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
