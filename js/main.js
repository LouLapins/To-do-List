window.onload = function() {

    createAll();

    addbutton.addEventListener("click", addTask);

    function addTask() {
        let liToDo = document.createElement("li");
        liToDo.innerText = inputfield.value;
        let ulToDo = document.getElementById("todolist");
        ulToDo.appendChild(liToDo);
        inputfield.value = "";
    }


}

class Todo {
    constructor(task, id, finished, deleted) {
        this.task = task;
        this.id = id;
        this.finished = finished;
        this.deleted = deleted;
    }
}

let todo1 = new Todo("Send parcel", id = 1, false, false);
let todo2 = new Todo("Return book", id = 2, false, false);
let todo3 = new Todo("Buy shampoo bar", id = 3, false, false);
let todo4 = new Todo("Return pants", id = 4, false, false);
let todo5 = new Todo("Water plants", id = 5, false, false);
let todo6 = new Todo("Buy toilet roll", id = 6, false, false);
let todo7 = new Todo("Pay electricity bill", id = 7, false, false);
let todo8 = new Todo("Buy coffee", id = 8, false, false);

let todos = [];

todos.id = "todos";

todos.push(todo1);
todos.push(todo2);
todos.push(todo3);
todos.push(todo4);
todos.push(todo5);
todos.push(todo6);
todos.push(todo7);
todos.push(todo8);

console.log(todos);



function createAll() {
    let listwrapper = document.createElement("div");
    listwrapper.id = "listwrapper";
    document.body.appendChild(listwrapper);

    let heading1 = document.createElement("h2");
    heading1.innerHTML = "To do list:";
    listwrapper.appendChild(heading1);


    let header = document.createElement("header");
    header.id = "header";
    document.body.appendChild(header);


    let footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);



    let inputfield = document.createElement("input");
    inputfield.id = "inputfield";
    inputfield.setAttribute("type", "text");
    inputfield.setAttribute("placeholder", "Add a task...")
    footer.appendChild(inputfield);



    let addbutton = document.createElement("button");
    addbutton.id = "addbutton";
    addbutton.innerHTML = "+";
    footer.appendChild(addbutton);


    let ulToDo = document.createElement("ul");
    ulToDo.id = "todolist";
    listwrapper.appendChild(ulToDo);



    for (let i = 0; i < todos.length; i++) {
        let liToDo = document.createElement("li");
        liToDo.id = "liToDo";
        liToDo.innerHTML = todos[i].task;
        let deletebutton = document.createElement("button");
        deletebutton.id = "deletebutton";
        deletebutton.innerHTML = "x";
        ulToDo.appendChild(liToDo);

        deletebutton.addEventListener("click", () => { deleteLi(todos[i]) });

        liToDo.appendChild(deletebutton);
    }


    function deleteLi(todo) {
        let li = document.getElementById("liToDo");
        todo.deleted = true;
        console.log(todo.deleted);
        if (todo.deleted = true) {
            li.style.display = "none";
        }
    }


}