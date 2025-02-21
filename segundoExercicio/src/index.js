const fs = require('fs');

const caminhoArquivo = process.argv[2];

fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});