const fs = require('fs');

const caminhoArquivo = process.argv[2];

fs.readFile(caminhoArquivo, 'utf8', (erro, texto) => {
  if (erro) {
    console.error(erro);
    return;
  }
  verificaPalavrasDuplicadas(texto);
});

function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    if (resultado[palavra]) {
      resultado[palavra]++;
    } else {
      resultado[palavra] = 1;
    }
  });
  console.log(resultado)
}