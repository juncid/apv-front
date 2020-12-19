import { replace } from "formik";

export const cleanDigitos = (value) => {
    const regex = /[^\d]/g;

    return value.replace(regex, ''); 
}


export const cleanRut = (value) => {
    const regex = /\./g;
    return value.replace(regex, '')
}
