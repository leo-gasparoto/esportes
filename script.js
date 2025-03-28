let titulo = document.getElementById("titulo");
console.log(titulo);

//CLASSE
let descricao1 = document.getElementById("descricao1")
console.log(descricao1[0]);

let descricao2 = document.getElementById("descricao2")
console.log(descricao2[1]);

let descricao3 = document.getElementById("descricao3")
console.log(descricao3[2]);

let descricao4 = document.getElementById("descricao4")
console.log(descricao4[3]);


//TAG
let liEsporte1 = Document.getElementByTagName("li");
console.log(liEsportes[0]);

let liEsporte2 = Document.getElementByTagName("li");
console.log(liEsportes2[1]);

let liEsporte3 = Document.getElementByTagName("li");
console.log(liEsportes3[2]);

let liEsporte4 = Document.getElementByTagName("li");
console.log(liEsportes4[3]);

//CSS

let tituloQS = document.querySelector("#titulo");
let liEsporteQS = document.querySelector(".descricao");
console.log("Exibindo com QS" + tituloQS.textContent)
console.log("Exibindo com QS" + liEsporte1[0].textContent)
console.log("Exibindo com QS" + liEsportes2[1].textContent)
console.log("Exibindo com QS" + liEsportes3[2].textContent)
console.log("Exibindo com QS" + liEsportes4[3].textContent)





