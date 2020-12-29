import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {

    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <Spinner animation="border" role="status" variant="success">
                <span className="sr-only">Calculando...</span>
            </Spinner>
            <span>Calculando...</span>
        </div>
    );
}
