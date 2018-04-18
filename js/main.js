/**
*	Created by Julio Lira
*	Office webpage: https://jul10l1r4.github.io
*/
carregaDocumento( `embed/ultimasnoticias.html`, `#noticia` );// Aqui é pra importar partes da página 
carregaDocumento( `embed/anuncios.html`, `#anuncios` );
// substitua por https://allytiago.github.io/ antes p n dar trabalho
function carregaDocumento(arquivo, target){
	let elem = document.querySelector(target);
//Se o elemento não existir então não requisita
// Pegando dados
	fetch(arquivo)
	.then(function(resposta){
		return resposta.text()// Transformando a resposta em texto 
		.then(function(text) {
			elem.innerHTML = text;
		})
	})
}