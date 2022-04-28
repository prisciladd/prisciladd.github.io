// console.log("Vai Corinthians!!");
// console.info("Informação");
// console.error("Forçando erro");
// console.warn("Forçando aviso");

// // const é constante - Não muda. A não ser objetos e referências, aí o seu conteúdo pode mudar.
// // var é antigo
// const nome = "Priscila Da Dalt";

// // let - variável - pode mudar a qualquer momento.
// let email = "prisciladadalt@gmail.com";

// console.log(`Nome: ${nome} Email: ${email}`);

// function escreve(x){
//     console.log("Frase: " + x);
// }

// escreve(`Seja bem vindo(a) ${nome}, ao Treinamento HTML5, CSS3 e JS`);

// ######################################################
// objeto.metodo();
// objeto.propriedade = valor;

// document é um objeto.
// ######################################################

// Banco de dados NoSQL - Orientado a Documentos.

const db = [
    {
        id: 1,
        title: 'Estudar inglês EF',
        steps: [
            {step: 'Concluir etapa 6'},
            {step: 'Concluir etapa 7'},
            {step: 'Concluir etapa 8'},
            {step: 'Concluir etapa 9'},
            {step: 'Concluir etapa 10'},
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00',

    },

    {
        id: 2,
        title: 'Estudar para certificação',
        steps: [
            {step: 'Concluir learning path'},
            {step: 'Ver vídeos do Rogerio'},
            {step: 'Fazer simulados'},
        ],
        done: false,
        dueDate: '2022-05-29',
        reminder: '2022-05-15 10:00',

    },

];

console.log(db[0].title);

const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});

newTask.addEventListener ("keyup", (e) => {
    e.preventDefault(); //tira o comportamento padrão
    e.stopPropagation();
    if (e.key == "Enter") {
        alert(newTask.value);

        db.push({ id: Number(db.length) + 1, title: newTask.value});

        newTask.value = "";
        console.log(db);
    }
});

// const frutas = ["maça","banana", "abacaxi", "abacate"];
// console.log(frutas.at(-2));
// console.log(frutas(frutas.lenght(-2)));

// objeto literal:

// const dados = {
//     nome: "Priscila Da Dalt",
//     idade: 34,
//     programador: true,
//     acao: () => {
//         console.log("Executando ação");
//     },
// };

// console.log(dados.nome);
