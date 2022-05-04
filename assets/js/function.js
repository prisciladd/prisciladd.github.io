// Função nominal com parâmetro obrigatório

// undefined é um tipo de valor que não existe.
// null é um tipo de valor inválido.

// função sem return é uma subrotina.
function escreve(nome,sobrenome){
    const a = sobrenome;
    if(a === null){
        console.log("sobrenome é nulo");
        console.log("valor de a:", a, "\n");
        console.log("valor de sobrenome:", sobrenome, "\n");
        
    }
    console.log(`${nome} ${sobrenome}`);
}

escreve("Priscila");

// função nominal que retorna valor.
function soma(a,b){
    return Number(a) + Number(b);
}

const resultado = soma(1,2);

console.log("Função soma", soma(2,3));

// expressão de função = uma função é atribuída a um contexto por exemplo uma variável
const exibe = function(x){
    return `Exibindo parâmetro ${x}`;
};

console.log("Função na variável", exibe("chocolate"));

// onde o JS esta sendo executado? Qual o contexto?
// Contexto: navegador. this depende do contexto.
// no navegador this é a window.

// mas se voce estiver usando a versão estrita do javascript o this não será a window.
function quemEoThis(){

    console.log("Função quem é o this", this === window);
}

function quemEoThisEstrito(){
    // quando queremos usar o JS na versão mais polida, o use strict deve ser informado no início. A partir de 2018 os navegadores passaram a implementar o use strict
    "use strict";
    console.log( "strict");
    console.log("Função quem é o this estrito", this === window);
}

quemEoThis();
quemEoThisEstrito();

function Exibe2(){
    this.a = 50;
}

const novoObjeto = new Exibe2();
console.log(novoObjeto.a);

// objeto global
let empresa = this; //window

// quando usamos o this dentro de um objeto o this é o objeto
const aluno = {
    nome: "Priscila",
    matricula: 1901843,
    executar: function(){
        return `Exibindo this de dentro de um método ${this.nome}`;
    }
}

console.log (aluno.executar());

console.log ("Quem é o this no contexto global", empresa)

// this dentro de uma função também é um objeto global
function globalObj(){
    //this vira undefined
    return this; 
}

document.write("<h2>Escrevendo no body</h2>");
document.write(globalObj());

// globalObj().alert("Vai Corinthians!");

// Arrow Function - Função de seta, ela é mais curta, não tem o próprio contexto.
const novaFuncao = (a,b) => {
    console.log("Chamando de dentro de uma arrow function");
    
    // Interpolação de variáveis é chamar uma variável dentro de uma string, Template String. Prefira este
    console.log(`Exibindo o valor de ${a}`);
    
    // concatenação de variáveis.
    console.log("Exibindo o total de caracteres " + b.length);
};

console.log(novaFuncao("Priscila","Da Dalt"))
const funcao3 = a =>
    console.log(`Exibindo o total de caracteres de ${a.length}`);

console.log(funcao3("Priscila Da Dalt"))

// spread operator ...
    const carros = (primeiro, segundo, ...restante) => {
        console.log(`Os carros informados foram: ${primeiro}, ${segundo}. Todos os demais são: ${restante.join(', ')}`);
    }

carros("DelRey", "Belina", "Fusca", "Variant", "Parati", "Monza", "Scort", "Brasilia", "Fiat 147", "D-20", "Kombi", "BMW", "Gurgel", "Maverick", "Marea", "Land Rover");

const frutas = ['guaraná', 'cupuaçu', 'açaí'];

const todasFrutas = [...frutas, 'banana', 'abacaxi'];

console.log("Todas as frutas:", todasFrutas);

// destructuring assignment
// atribuição de desestruturação

let a = 50;
let b = 100;

const [primeiro, segundo, terceiro, ...resto] = [a, b, 200, 1000, 5000];
console.log("Exibindo o primeiro:", primeiro);
console.log("Exibindo o resto:", resto);

const meuArray = [10,20,30,40];
console.log(meuArray, meuArray.join(", ")); //join transforma em um texto só separado por , .

// const [p,s,t,q] = meuArray;
// console.log("Exibindo o quarto", q)

const [q, ...p] = meuArray.reverse();
console.log(meuArray.reverse());