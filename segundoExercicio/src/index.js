const fs = require('fs');

const caminhoArquivo = process.argv[2];

fs.readFile(caminhoArquivo, 'utf8', (erro, texto) => {
  if (erro) {
    console.error(erro);
    return;
  }
  separaParagrafos(texto);
})

function separaParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split('\n');
  const contagem = paragrafos
    .flatMap((paragrafo) => {
      if (!paragrafo) return [];
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
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
