import React from "react";
import ChanchitoA from "../public/assets/svg/chanchitoa.svg";
import ChanchitoB from "../public/assets/svg/chanchitob.svg"
import ChanchitoMixto from "../public/assets/svg/chanchitomixto.svg"
import { aacento, eacento, iacento, oacento } from '../utils/caracteresUTF8'

export default function HeaderRecomendacion(props) {

    let texto_regimen = '';
    let alt_imagen = '';
    let url_imagen = '';


    switch (props.recomendacionApv ) {
        case 'A':
            texto_regimen = `En  base a tu renta mensual y el monto del aporte quieres realizar el 15% de bonificaci${oacento}n por parte del Estado es el que m${aacento}s te conviene.`;
            alt_imagen = "regimen A";
            url_imagen = ChanchitoA;
            break;
        case 'B':
            texto_regimen = `En  base a tu renta mensual y el monto del aporte quieres realizar el descuento de tu base tributaria es mayor al aporte del 15% de bonificaci${oacento}n del r${eacento}gimen A.`;
            alt_imagen = "regimen B";
            url_imagen = ChanchitoB;
            break;
        case 'M':
            texto_regimen = `En base a tu renta mensual y el monto a ahorrar  te conviene una mezcla de los reg${iacento}menes A y B, donde obtendr${aacento}s tanto una bonificaci${oacento}n por el ahorro como una rebaja en tu base tributaria.`;
            alt_imagen = "regimen Mixto";
            url_imagen = ChanchitoMixto;
            break;
        default:
            break;
    }

    return (
        <div className="row">
            <div className="col-12 mx-auto text-center header">
                <img
                    src={url_imagen}
                    alt={alt_imagen} />
                <h1>Te recomendamos {props.recomendacionApv === 'M' ? 'un' : 'el'} r{eacento}gimen {props.recomendacionApv === 'M' ? 'Mixto' : props.recomendacionApv}</h1>
                <div className='d-flex justify-content-center'>
                    <p>{texto_regimen}</p>
                </div>
            </div>
        </div>
    );
}
