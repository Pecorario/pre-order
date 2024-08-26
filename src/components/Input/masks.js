export const getMaxLenght = {
  zipcode: 8,
  telephone: 15,
  cpf: 11,
  cnpj: 14,
};

export function ZipCodeMask(e) {
  let value = e;
  const regex = /^([0-9]{5})?([0-9]{3})$/;
  value = value.replace(/\D/g, '');
  value = value.replace(regex, '$1-$2');

  if (value.replace(/\D/g, '').length <= getMaxLenght.zipcode) return value;
  return false;
}

export function TelephoneMask(e) {
  let value = e;
  if (!value) return '';

  // Remove todos os caracteres que não são dígitos
  value = value.replace(/\D/g, '');

  // Formata números brasileiros (11 dígitos)
  if (value.length > 11) {
    // Formato internacional: +XX (XXX) XXX-XXXX
    value = value.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 ($2) $3-$4');
  } else if (value.length === 11) {
    // Formato brasileiro: (XX) XXXXX-XXXX
    value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (value.length === 10) {
    // Formato brasileiro sem DDD: (XX) XXXX-XXXX
    value = value.replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');
  } else {
    // Formato básico para menos de 10 dígitos
    value = value.replace(/^(\d{2})(\d*)$/, '($1) $2');
  }

  return value;
}

export function CPFMask(e) {
  const regex = /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/;

  let value = e;
  value = value.replace(/\D/g, '');
  value = value.replace(regex, '$1.$2.$3-$4');

  if (value.replace(/\D/g, '').length <= getMaxLenght.cpf) return value;
  return false;
}

export function CPNJMask(e) {
  const regex = /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})$/;
  let value = e;
  value = value.replace(/\D/g, '');

  value = value.replace(regex, '$1.$2.$3/$4-$5');

  if (value.replace(/\D/g, '').length <= getMaxLenght.cnpj) return value;
  return false;
}

export function DecimalMask(e) {
  let value = e;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  return value;
}
