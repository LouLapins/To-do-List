window.onload = function() {

    createHtmlElements();

    runLoop();

}

///////////////////////////// ARRAY OF TODOS as objects ///////////////////////////////

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

///////////// CREATING ALL HTML ELEMENTS THROUGH JS //////////////

function createHtmlElements() {

    let listWrapper = document.createElement("div");
    listWrapper.id = "listWrapper";
    document.body.appendChild(listWrapper);


    let heading = document.createElement("h2");
    heading.innerHTML = "To do list:";
    listWrapper.appendChild(heading);


    let footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);


    let inputWrapper = document.createElement("div");
    inputWrapper.id = "inputWrapper";
    footer.appendChild(inputWrapper);


    let ulTodos = document.createElement("ul");
    ulTodos.id = "ulTodos";
    listWrapper.appendChild(ulTodos);


    let inputField = document.createElement("input");
    inputField.id = "inputField";
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Add a task...")
    inputWrapper.appendChild(inputField);


    let addButton = document.createElement("button");
    addButton.id = "addButton";
    addButton.innerHTML = "+";
    addButton.addEventListener("click", addTask);
    inputWrapper.appendChild(addButton);
}

//////////////////// CREATING LOOP DISPLAYING ARRAY AS LISTITEMS //////////////////

function runLoop() {
    for (let i = 0; i < todos.length; i++)

    ////// (BOOLEAN FUNCTION TO HIDE DELETED TODOS) /////
        if ((todos[i].deleted) == false) {
        let liTodos = document.createElement("li");
        liTodos.id = "liTodos";
        liTodos.innerHTML = todos[i].task;
        ulTodos.appendChild(liTodos);

        ///// (CREATING DELETEBUTTON INSIDE EACH LISTITEM) /////
        let deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton";
        deleteButton.className = "fas fa-times";
        deleteButton.addEventListener("click", () => { deleteTask(todos[i]) });
        liTodos.appendChild(deleteButton);
    }
}

///////////////////////// FUNCTION TO DELETE A TODO ///////////////////////////////

// Splice Method //

// function deleteTask(todo) {
//     todo.deleted = true;
//     if (todo.deleted = true) {
//         todos.splice(0, 1);
//         ulTodos.innerHTML = "";
//         runLoop();
//     }
// }


// Filter values in loop with boolean Method //

function deleteTask(object) {
    object.deleted = true;
    ulTodos.innerHTML = "";
    runLoop();
}

//////////////////////// FUNCTION TO ADD A NEW TODO ///////////////////////////////

function addTask() {
    let liTodos = document.createElement("li");
    liTodos.innerText = inputField.value;
    let ulTodos = document.getElementById("ulTodos");
    ulTodos.appendChild(liTodos);
    inputField.value = "";


    let newTodo = new Todo(liTodos.innerText, false, false);
    todos.push(newTodo);
    ulTodos.innerHTML = "";
    runLoop();

}