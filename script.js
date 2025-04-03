let titulo = document.getElementById("titulo");
titulo.textContent = "Meus Esportes Favoritos"
titulo.style.color = "blue"

// //CLASSE
// let descricao1 = document.getElementById("descricao1")
// console.log(descricao1[0]);

// let descricao2 = document.getElementById("descricao2")
// console.log(descricao2[1]);

// let descricao3 = document.getElementById("descricao3")
// console.log(descricao3[2]);

// let descricao4 = document.getElementById("descricao4")
// console.log(descricao4[3]);


// //TAG
// let liEsporte1 = Document.getElementByTagName("li");
// console.log(liEsportes[0]);

// let liEsporte2 = Document.getElementByTagName("li");
// console.log(liEsportes2[1]);

// let liEsporte3 = Document.getElementByTagName("li");
// console.log(liEsportes3[2]);

// let liEsporte4 = Document.getElementByTagName("li");
// console.log(liEsportes4[3]);

//CSS

const tituloQS = document.querySelector("#titulo");
console.log("Exibindo com QS" + tituloQS.textContent)


let liEsporteQS = document.querySelectorAll(".descricao");
console.log("Exibindo com QS" + liEsporteQS[0].textContent)


const lista = document.querySelector("ul"); 
const novoEsporte1 = document.createElement("li");
novoEsporte1.textContent = "Beisebol";
novoEsporte1.classList.add("esporte");

const novoEsporte2 = document.createElement("li");
novoEsporte2.textContent = "Natação";
novoEsporte2.classList.add("esporte");

lista.appendChild(novoEsporte1);
lista.appendChild(novoEsporte2);

