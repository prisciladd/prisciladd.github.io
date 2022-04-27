console.log("Vai Corinthians!!");
console.info("Informação");
console.error("Forçando erro");
console.warn("Forçando aviso");

// const é constante - Não muda. A não ser objetos e referências, aí o seu conteúdo pode mudar.
// var é antigo
const nome = "Priscila Da Dalt";

// let - variável - pode mudar a qualquer momento.
let email = "prisciladadalt@gmail.com";

console.log(`Nome: ${nome} Email: ${email}`);

// hoisting (fisgar)

function escreve(x){
    console.log("Frase: " + x);
}

escreve(`Seja bem vindo(a) ${nome}, ao Treinamento HTML5, CSS3 e JS`);



// ######################################################
// objeto.metodo();
// objeto.propriedade = valor;

// document é um objeto.

// em JavaScript existem 7 tipos de erros
// ######################################################