import downloader from './downloader.js';
import {
  DEPARTAMENTOS,
  TIPO_ELECCION,
  composeUrl,
} from './constants.js';

const diputadosNacional = async ({
  url,
}) => {
  const depArray = Object.keys(DEPARTAMENTOS);
  const tipoEleccion = Object.keys(TIPO_ELECCION)[1];

  for (let i = 0; i < depArray.length; i++) {
    const departamento = depArray[i];

    await downloader(
      composeUrl(url, departamento, tipoEleccion),
      `${DEPARTAMENTOS[departamento]}.json`,
      'diputadoslistanacional'
    );
  }
};

export default diputadosNacional;
