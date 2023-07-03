export const composeUrl = (urlBase, departamento, tipoEleccion) =>
  `${urlBase}/gtm2023_${tipoEleccion}_${departamento}.json`;
export const URL_BASE = 'https://trep.gt/ext/jsonData_gtm2023/1687736870/1688050101';
export const DEPARTAMENTOS = {
  'e0': 'Distrito Central',
  'e1': 'Guatemala',
  'e2': 'Sacatepéquez',
  'e3': 'Chimaltenango',
  'e4': 'El Progreso',
  'e5': 'Escuintla',
  'e6': 'Santa Rosa',
  'e7': 'Sololá',
  'e8': 'Totonicapán',
  'e9': 'Quetzaltenango',
  'e10': 'Suchitepéquez',
  'e11': 'Retalhuleu',
  'e12': 'San Marcos',
  'e13': 'Huehuetenango',
  'e14': 'Quiché',
  'e15': 'Baja Verapaz',
  'e16': 'Alta Verapaz',
  'e17': 'Petén',
  'e18': 'Izabal',
  'e19': 'Zacapa',
  'e20': 'Chiquimula',
  'e21': 'Jalapa',
  'e22': 'Jutiapa',
  'e23': 'Guatemaltecos en Estados Unidos',
};
export const TIPO_ELECCION = {
  'tc1': 'Presidente y Vicepresidente',
  'tc2': 'Diputados Lista Nacional',
  'tc3': 'Diputados Distritales',
  'tc4': 'Corporaciones Municipales',
  'tc5': 'Diputados Parlamento Centroamericano',
};
