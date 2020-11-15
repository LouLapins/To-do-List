window.onload = function() {

    let listwrapper = document.createElement("div");
    listwrapper.id = "listwrapper";
    document.body.appendChild(listwrapper);

    let heading = document.createElement("h2");
    heading.innerHTML = "To do list:";
    listwrapper.appendChild(heading);


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

    runLoop();

    addbutton.addEventListener("click", addTask);



    function runLoop() {
        for (let i = 0; i < todos.length; i++) {
            let liToDo = document.createElement("li");
            liToDo.id = "liToDo";
            liToDo.innerHTML = todos[i].task;
            let deletebutton = document.createElement("button");
            deletebutton.id = "deletebutton";
            deletebutton.innerHTML = "x";
            ulToDo.appendChild(liToDo);

            deletebutton.addEventListener("click", () => { deleteTask(todos[i]) });

            liToDo.appendChild(deletebutton);
        }
    }

    function deleteTask(todo) {
        todo.deleted = true;
        if (todo.deleted = true) {
            todos.splice(0, 1);
            todolist.innerHTML = "";
            runLoop();
        }
    }

    // function deleteTask(todo) {
    //     todo.deleted = true;
    //     if (todos[i].deleted = false) {
    //         todos.push(todos[i]);
    //         todolist.innerHTML = "";
    //         runLoop();
    //     }
    // }

    function addTask() {
        let liToDo = document.createElement("li");
        liToDo.innerText = inputfield.value;
        let ulToDo = document.getElementById("todolist");
        ulToDo.appendChild(liToDo);
        inputfield.value = "";


        let newtodo = new Todo(liToDo.innerText, false, false);
        todos.push(newtodo);
        todolist.innerHTML = "";
        runLoop();

    }


}

class Todo {
    constructor(task, finished, deleted) {
        this.task = task;
        this.finished = finished;
        this.deleted = deleted;
    }
}

let todo1 = new Todo("Send parcel", false, false);
let todo2 = new Todo("Return book", false, false);
let todo3 = new Todo("Buy shampoo bar", false, false);
let todo4 = new Todo("Return pants", false, false);
let todo5 = new Todo("Water plants", false, false);
let todo6 = new Todo("Buy toilet roll", false, false);
let todo7 = new Todo("Pay electricity bill", false, false);
let todo8 = new Todo("Buy coffee", false, false);

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