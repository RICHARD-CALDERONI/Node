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
  const contagem = paragrafos
    .filter((paragrafo) => paragrafo)
    .map((paragrafo) => {
    return verificaPalavrasDuplicadas(paragrafo);
  })

  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[\r.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}
 
 
function verificaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(' ');
  const resultado = {};
  listaPalavras.forEach(palavra => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      if (resultado[palavraLimpa]) {
        resultado[palavraLimpa]++;
      } else {
        resultado[palavraLimpa] = 1;
      }
    }
  });
  return resultado;
}
