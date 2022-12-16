/*

Objetivo - quando clicarmos na aba temos que mostrar 
o conteudo da aba que foi selecionada pelo usuario e esconder o conteudo da aba 
anterior 
 
- passo 1- dar um jeito de pegar o elemento que representa as abas no HTML. 

- passo 2- dar um jeito de identificar o clique no elemento da aba.

- passo 3- quando o usuario clicar dar um jeito de desmarca a aba anterior

- passo 4- marcar a aba selecionada.

- passo 5- esconder o conteudo anterior.

- passo 6- mostrar o conteudo da aba selecionada.
*/ 

//  passo 1- dar um jeito de pegar o elemento que representa as abas no HTML.
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
// passo 2- dar um jeito de identificar o clique no elemento da aba.

    aba.addEventListener("click", function() {
    
        if(aba.classList.contains("selecionado")){
            return;
        }
    //passo 3- quando o usuario clicar dar um jeito de desmarca a aba anterior
    const abaSelecionada =  document.
    querySelector(".aba.selecionado");
    abaSelecionada.classList.remove
    ("selecionado");

    //passo 4- marcar a aba selecionada.
    aba.classList.add("selecionado")

   // passo 5- esconder o conteudo anterior.
   const informacaoSelecionada = document.
   querySelector(".informacao.selecionado")
   console.log(informacaoSelecionada);
   informacaoSelecionada.classList.remove
   ("selecionado");

   //passo 6- mostrar o conteudo da aba selecionada.
   const idDoElementoDeInformacoesDaAba = 
   `informacao-${aba.id}`

   const informacaoASerMostrada = document.
   getElementById(idDoElementoDeInformacoesDaAba)
   informacaoASerMostrada.classList.add
   ("selecionado")
    })
})




