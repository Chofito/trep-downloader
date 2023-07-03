import prompts from 'prompts';

import presidenteVice from './presidenteVice.js';
import {
  URL_BASE,
} from './constants.js';
import {
  yellow,
  lightGreen,
  lightBlue,
  magenta,
  white,
} from 'kolorist';
import diputadosNacional from './diputadosNacional.js';
import diputadosDistritos from './diputadosDistritos.js';
import diputadosParlacen from './diputadosParlacen.js';
import corporacionesMunicipales from './corporacionesMunicipales.js';

let RUN = true;
let alternativeUrl = URL_BASE;

const actions = {
  '1': async () => {
    await presidenteVice({
      url: alternativeUrl,
    });
  },
  '2': async () => {
    await diputadosNacional({
      url: alternativeUrl,
    });
  },
  '3': async () => {
    await diputadosDistritos({
      url: alternativeUrl,
    });
  },
  '4': async () => {
    await corporacionesMunicipales({
      url: alternativeUrl,
    });
  },
  '5': async () => {
    await diputadosParlacen({
      url: alternativeUrl,
    });
  },
  'url_alt': async () => {
    const response = await prompts({
      type: 'text',
      name: 'url',
      message: 'Por favor, ingresa la URL de referencia.',
      initial: alternativeUrl,
      validate: (value) => {
        return RegExp(/^(http|https):\/\/[^ "]+$/).test(value);
      },
    });

    alternativeUrl = response.url;
  },
  'x': () => {
    RUN = false;
  },
};

while (RUN) {
  const response = await prompts({
    type: 'select',
    name: 'option',
    message: 'Por favor, indica la acción que quieres realizar.',
    initial: 0,
    choices: [
      { title: 'Descargar datos Presidente y Vicepresidente.', value: 1, color: white },
      { title: 'Descargar datos Diputados Lista Nacional.', value: 2, color: lightGreen },
      { title: 'Descargar datos Diputados Distritales.', value: 3, color: lightBlue },
      { title: 'Descargar datos Corporaciones Municipales.', value: 4, color: magenta },
      { title: 'Descargar datos Diputados al Parlacen.', value: 5, color: yellow },
      { title: 'Cambiar URL de referencia.', value: 'url_alt', description: 'Esta URL parece que cambia cada que actualizan resultados, si te llega a fallar la descarga revisa el archivo Readme y sigue las instrucciones para obtener una nueva URL.' },
      { title: 'Salir del programa.', value: 'x' },
    ],
  });

  const action = actions[response.option];

  if (action) {
    await action();
  }
}
