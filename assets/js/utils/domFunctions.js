// quando precisamos acessar uma função em outro arquivo, é necessário exportá-la.
// para importar usamos desestruturação, importar somente a função que irá usar não o arquivo todo 
// import {addTask} from './domFunctions.js';

// CRUD
export function addTask(db,title=""){
    // criando uma nova tarefa
    const task = document.createElement('div');
    // const id = Number(db.lenght) + 1;
    task.classList.add('task');
    task.setAttribute('id', db.id);

    const taskBody = `
    <div><input type="checkbox" id="check_${db.id}" /></div>
    <div>
        <div><span class="title-task">${
            // operador ternário. If de uma linha
            // condição ? verdadeiro : falso
            title?title:db.title}</span></div>
        <div>
    </div>
    <div>Star</div>
    `;

    task.innerHTML = taskBody;
    document.querySelector(".tasks").appendChild(task);
}

export function removeTask(){
    alert("Removendo uma tarefa");
}

export function updateTask(){
    alert("Alterando uma tarefa");
}

// colocamos chocolate só para exemplificar que pode ser qualquer nome
export function getAllTasks(chocolate){
    chocolate.forEach((item) => {
        addTask(item);
    });
}

export function getTaskById(){
    alert("Exibindo uma tarefa");
}