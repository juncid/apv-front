import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import {aacento, eacento, iacento, oacento} from "../utils/caracteresUTF8";

export default function ResultadosModal(props) {
    const sueldoLiquido = props.data.sueldoLiquidoConsulta !== undefined && props.data.sueldoLiquidoConsulta.toLocaleString("es-CL");
    const recomendacionApv = props.data.recomendacionApv !== undefined && props.data.recomendacionApv;
    const aporteAfp = props.data.aporteAfp !== undefined && props.data.aporteAfp;
    const aporteIsapre = props.data.aporteIsapre !== undefined && props.data.aporteIsapre;
    const seguroCesantia = props.data.seguroCesantia !== undefined && props.data.seguroCesantia;
    const comisionAfp = props.data.comisionAfp !== undefined && props.data.comisionAfp;
    const descuentosLegales = Math.trunc(aporteAfp + aporteIsapre + seguroCesantia + comisionAfp).toLocaleString("es-CL");
    const rentaTributable = props.data.sueldoTributario !== undefined && Math.trunc(props.data.sueldoTributario).toLocaleString("es-CL");
    const tasaImpuestoSegCat = props.data.tasaImpuestoSegCat !== undefined && (props.data.tasaImpuestoSegCat * 1).toFixed(2);
    const montoImpuestoSegCat = props.data.montoImpuestoSegCat !== undefined && Math.trunc(props.data.montoImpuestoSegCat).toLocaleString("es-CL");

    console.log(recomendacionApv);
    const ahorroMensualA= recomendacionApv === 'M' ? props.data.mixtoApvA !== undefined &&  Math.round(props.data.mixtoApvA).toLocaleString("es-CL") : props.data.aporteApv !== undefined && props.data.aporteApv.toLocaleString("es-CL");
    const ahorroMensualB = recomendacionApv === 'M' ? props.data.mixtoApvB !== undefined && Math.round(props.data.mixtoApvB).toLocaleString("es-CL") : props.data.aporteApv !== undefined && props.data.aporteApv.toLocaleString("es-CL");

    const beneficioRegA = recomendacionApv === 'M' ? props.data.mixtoBeneficioApvA !== undefined && Math.round(props.data.mixtoBeneficioApvA).toLocaleString("es-CL") : props.data.beneficioRegA !== undefined && props.data.beneficioRegA.toLocaleString("es-CL");
    const beneficioRegB = recomendacionApv === 'M' ? props.data.mixtoBeneficioApvB !== undefined && Math.round(props.data.mixtoBeneficioApvB).toLocaleString("es-CL") :  props.data.beneficioRegB !== undefined && props.data.beneficioRegB.toLocaleString("es-CL");

 // mixtoBeneficioApvA
    const impSegCatApvregA = props.data.impSegCatApvregA !== undefined && Math.trunc(props.data.impSegCatApvregA).toLocaleString("es-CL");
    const impSegCatApvregB = props.data.impSegCatApvregB !== undefined && Math.trunc(props.data.impSegCatApvregB).toLocaleString("es-CL");

    const sueldoLiquidoConApvregA = recomendacionApv === 'M' ? props.data.mixtoSueldoLiquido !== undefined && Math.round(props.data.mixtoSueldoLiquido).toLocaleString("es-CL") : props.data.sueldoLiquidoConApvregA !== undefined && Math.round(props.data.sueldoLiquidoConApvregA).toLocaleString("es-CL");
    const sueldoLiquidoConApvregB = recomendacionApv === 'M' ? props.data.mixtoSueldoLiquido !== undefined && Math.round(props.data.mixtoSueldoLiquido).toLocaleString("es-CL") : props.data.sueldoLiquidoConApvregB !== undefined && Math.round(props.data.sueldoLiquidoConApvregB).toLocaleString("es-CL");

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
                        Estos son los datos de tu simulaci{oacento}n:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table hover responsive
                        className="table-borderless"
                    >
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-right">APV R{eacento}gimen A</th>
                                <th className="text-right">APV R{eacento}gimen B</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sueldo l{iacento}quido:</td>
                                <td className="text-right">${sueldoLiquido}</td>
                                <td className="text-right">${sueldoLiquido}</td>
                            </tr>
                            <tr>
                                <td>Ahorro mensual:</td>
                                <td className="text-right">${ahorroMensualA}</td>
                                <td className="text-right">${ahorroMensualB}</td>
                            </tr>
                            <tr>
                                <td>Descuentos legales:</td>
                                <td className="text-right">${descuentosLegales}</td>
                                <td className="text-right">${descuentosLegales}</td>
                            </tr>
                            <tr>
                                <td>Renta Tributable:</td>
                                <td className="text-right">${rentaTributable}</td>
                                <td className="text-right">${rentaTributable}</td>
                            </tr>
                            <tr>
                                <td>Tasa de impuestos:</td>
                                <td className="text-right">{tasaImpuestoSegCat * 100}%</td>
                                <td className="text-right">{tasaImpuestoSegCat * 100}%</td>
                            </tr>
                            <tr>
                                <td>Impuestos sin APV:</td>
                                <td className="text-right">${montoImpuestoSegCat}</td>
                                <td className="text-right">${montoImpuestoSegCat}</td>
                            </tr>
                            <tr>
                                <td>Impuestos con APV:</td>
                                <td className="text-right">${impSegCatApvregA}</td>
                                <td className="text-right">${impSegCatApvregB}</td>
                            </tr>
                            <tr>
                                <td className="green-tabla">Bonificaci{oacento}n fiscal:</td>
                                <td className="text-right green-tabla">${beneficioRegA}</td>
                                <td className="text-right green-tabla">$0</td>
                            </tr>
                            <tr>
                                <td className="green-tabla">Descuento tributario:</td>
                                <td className="text-right green-tabla">$0</td>
                                <td className="text-right green-tabla">${beneficioRegB}</td>
                            </tr>
                            <tr>
                                <td>Nuevo sueldo l{iacento}quido:</td>
                                <td className="text-right">${sueldoLiquidoConApvregA}</td>
                                <td className="text-right">${sueldoLiquidoConApvregB}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className="disclaimer-modal">Calculos contemplados en modalidad de ahorro mensual a trav{eacento}s de mandato de descuento v{iacento}a empleador con un tope m{aacento}ximo de 50UF de ahorro mensual.*Descuentos legales corresponden a: Ahorro al fondo de pensiones (10%), cotizaci{oacento}n de salud (7%) y comisi{oacento}n AFP Modelo (0,77%).**Renta tributable corresponde a tu renta despu{eacento}s de pagar los descuentos legales.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
