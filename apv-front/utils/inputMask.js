import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import createRutMask from 'text-mask-rut';

export const rutMask = createRutMask();

export const dineroMask = createNumberMask({
    prefix: '$',
    thousandsSeparatorSymbol: '.',
});

export const celularMask = ["9", " ", /\d/, /\d/, /\d/, /\d/, " ", /\d/, /\d/, /\d/, /\d/];

