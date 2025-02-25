const fs = require('fs');

const caminhoArquivo = process.argv[2];

fs.readFile(caminhoArquivo, 'utf8', (erro, texto) => {
  if (erro) {
    console.error(erro);
    return;
  }
  separaParagrafos(texto)
});

function separaParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos.map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  })

  console.log(contagem);
}
 
 
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
  return resultado;
}
