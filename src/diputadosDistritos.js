import downloader from './downloader.js';
import {
  DEPARTAMENTOS,
  TIPO_ELECCION,
  composeUrl,
} from './constants.js';

const diputadosDistritos = async ({
  url,
}) => {
  const depArray = Object.keys(DEPARTAMENTOS);
  const tipoEleccion = Object.keys(TIPO_ELECCION)[2];

  for (let i = 0; i < depArray.length; i++) {
    const departamento = depArray[i];

    await downloader(
      composeUrl(url, departamento, tipoEleccion),
      `${DEPARTAMENTOS[departamento]}.json`,
      'diputadosdistritos',
    );
  }
};

export default diputadosDistritos;
