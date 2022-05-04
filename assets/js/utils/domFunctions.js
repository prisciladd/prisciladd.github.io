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
    <div class="task-title">
        <span class="title-task">${
            // operador ternário. If de uma linha
            // condição ? verdadeiro : falso
            title?title:db.title}</span>
        </div>
    <div class="star">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7753 3.56763L15.3896 8.52257L15.5043 8.74001L15.7465 8.78193L21.2668 9.73707L17.3622 13.7545L17.1909 13.9308L17.2259 14.1742L18.0233 19.7194L12.9959 17.2474L12.7753 17.1389L12.5547 17.2474L7.52728 19.7194L8.32475 14.1742L8.35974 13.9308L8.18839 13.7545L4.28381 9.73707L9.80409 8.78193L10.0463 8.74001L10.161 8.52257L12.7753 3.56763Z" stroke="#939393"/>
        </svg>
    </div>
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