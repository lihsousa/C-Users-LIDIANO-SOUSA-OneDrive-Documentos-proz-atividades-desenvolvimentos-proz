// Cptura do elemento ha e a.
const titulo = document.getElementById("titulo");
const link = document.querySelector("a");

// Adicionar conteúdo textual aos elementos h1 e a com innertext

titulo.innerText = "Conteudo innertext";
link.innerText = "logo da proz";

// Captura dos elementos ul e ol
const listaNaoOrganizada = document.querySelector('ul');
const listaOrganizada = document.querySelector("ol");

// Adicionar 3 elementos simples na lista não odernada 
//e 3  links na lista ordenada com innerHtml.

listaNaoOrganizada.innerHTML = `
<li>HOME</li>
<li>PAGINA</li>
<li>BLOG</li>
`
listaOrganizada.innerHTML = `
<li><a href="https://www.facebook.com.br">Facebook</li></a>
<li><a href="https://www.instagram.com.br">Instagram</li></a>
<li><a href="https://www.linkedin.com.br">Linkedin</li></a>
`
