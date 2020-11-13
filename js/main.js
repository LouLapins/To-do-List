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



    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);



}

class Todo {
    constructor(task, deadline, finished, deleted) {
        this.task = task;
        this.deadline = deadline;
        this.finished = finished;
        this.deleted = deleted;
    }
}

let todo1 = new Todo("Send parcel", "Wednesday", false, false)
let todo2 = new Todo("Return book", "Thursday", false, false);
let todo3 = new Todo("Buy shampoo bar", "Saturday", false, false);
let todo4 = new Todo("Return pants", "Friday", false, false);
let todo5 = new Todo("Water plants", "Tomorrow", false, false);
let todo6 = new Todo("Buy toilet roll", "Tomorrow", false, false);
let todo7 = new Todo("Pay electricity bill", "Friday", false, false);
let todo8 = new Todo("Buy coffee", "Tomorrow", false, false);

let todos = [];

todos.push(todo1);
todos.push(todo2);
todos.push(todo3);
todos.push(todo4);
todos.push(todo5);
todos.push(todo6);
todos.push(todo7);
todos.push(todo8);


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

    let liToDo = document.createElement("li");
    liToDo.id = "liToDo";
    liToDo.innerText = inputfield.value;
    inputfield.value = "";

    for (let i = 0; i < todos.length; i++) {
        let liToDo = document.createElement("li");
        liToDo.innerHTML = todos[i].task + ", " + todos[i].deadline;
        let deletebutton = document.createElement("button");
        deletebutton.id = "deletebutton";
        ulToDo.appendChild(liToDo);
        liToDo.appendChild(deletebutton);
    }

    document.getElementById("deletebutton").addEventListener("click", () => { myFunction(todos[i]) });

    function myFunction() {
        alert("Hello World!");
    }




}