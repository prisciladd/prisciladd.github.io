// quando precisamos acessar uma função em outro arquivo, é necessário exportá-la.
// para importar usamos desestruturação, importar somente a função que irá usar não o arquivo todo 
// import {addTask} from './domFunctions.js';

// CRUD
export function addTask(){
    alert("Cadastrando uma nova tarefa");
}

export function removeTask(){
    alert("Removendo uma tarefa");
}

export function updateTask(){
    alert("Alterando uma tarefa");
}

export function getAllTask(){
    alert("Listando todas tarefas");
}

export function getTaskById(){
    alert("Exibindo uma tarefa");
}