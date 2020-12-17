import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function TerminosModal(props) {
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
                        T�rminos y condiciones del servicio.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Al hacer click en el bot�n �calcular� acepto enviar los datos solicitados en
                        el formulario, para contacto posterior tanto a trav�s de medio digitales,
                        env�o de correo electr�nico y/o contacto telef�nico con el objetivo de
                        informar o asistirme en el proceso de suscripci�n de servicios por parte de
                        AFP Modelo.
                    </p>
                    <p>
                        Esta informaci�n no ser� utilizada con un fin diferente al indicado ni
                        compartida con otras empresas con otros fines diferentes al expresamente
                        autorizado.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
