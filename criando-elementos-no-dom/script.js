// Capturando o elemento pai
const body = document.querySelector("body");

// Criando e manipulando o elemento titulo  
const titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Americanas";


// Adicionando os elemento titulo no Dom.
body.appendChild(titulo);


// Criando e manipulando o elemento produto
const produto = document.createElement("div");
produto.innerHTML=`
<img src="./veentilador.png" alt="ventilador"</img>
<h2> Ventilador de Mesa 30cm Mondial VSP-30-B Super Power Preto - 110v</h2>
<P> Com 3 velocidades, o Ventilador Super Power VSP-30-B é mais vento. Ele tem baixo nível de ruído, sistema oscilante lateral,
 inclinação vertical regulável, além ser compacto e ter baixo consumo.
</P>
<P id="preco-ventilador"> R$ 149,90</p>
`

// Adicionando os elemento titulo e produto no Dom.

body.appendChild(produto);