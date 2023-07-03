import fs from 'fs';
import path from 'path';
import ora from 'ora';

const downloader = async (url, filename, pathName = '') => {

  const oraSpinner = ora(`Descargando ${filename}...`).start();

  try {
    if (pathName && !fs.existsSync(pathName)) {
      fs.mkdirSync(pathName);
    }

    const writer = fs.createWriteStream(path.join(pathName, filename));

    await fetch(url, {
      'method': 'GET'
    }).then(response => {
      return response.json();
    })
    .catch((error) => {
      const errorObject = {
        error,
        url,
        description: 'Esta hoja de datos no existe, url incorrecta.'
      };

      oraSpinner.fail(`Error al descargar ${filename}...`);

      writer.write(JSON.stringify(errorObject));
    })
    .then(data => {
      if (data && !data.error) {
        oraSpinner.succeed(`${filename} descargado correctamente.`);

        writer.write(JSON.stringify(data, null, 2));
      }
    });

  } catch (error) {
    console.error(error);
  }

  oraSpinner.stop();
};

export default downloader;
