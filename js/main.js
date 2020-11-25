window.onload = function() {

    createHtmlElements();

    runLoop();

}


///////////////////////////// Array of todos as objects ///////////////////////////////


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

///////////// Creating all html elements through JS //////////////

function createHtmlElements() {

    let wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    document.body.appendChild(wrapper);

    let listWrapper = document.createElement("div");
    listWrapper.id = "listWrapper";
    wrapper.appendChild(listWrapper);

    let heading = document.createElement("h2");
    heading.innerHTML = "To do list:";
    listWrapper.appendChild(heading);

    let sortButton = document.createElement("button");
    sortButton.id = "sortButton";
    sortButton.className = "fas fa-sort-alpha-down";
    sortButton.addEventListener("click", sortList);
    listWrapper.appendChild(sortButton);

    let ulTodos = document.createElement("ul");
    ulTodos.id = "ulTodos";
    listWrapper.appendChild(ulTodos);

    let footer = document.createElement("footer");
    footer.id = "footer";
    listWrapper.appendChild(footer);

    let inputWrapper = document.createElement("div");
    inputWrapper.id = "inputWrapper";
    footer.appendChild(inputWrapper);

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

//////////////////// Creating loop displaying array as list items //////////////////

function runLoop() {
    for (let i = 0; i < todos.length; i++)

        if ((todos[i].deleted) == false) { ////// (Boolean function to hide deleted todos) /////
        let liTodos = document.createElement("li");
        liTodos.id = "liTodos";
        liTodos.innerHTML = todos[i].task;
        ulTodos.appendChild(liTodos);
        let buttonWrapper = document.createElement("div");
        liTodos.appendChild(buttonWrapper);

        //// (Creating check button inside each list item) ////
        let finishedButton = document.createElement("button");
        finishedButton.id = "finishedButton";
        finishedButton.className = "far fa-check-circle";
        finishedButton.addEventListener("click", () => { finishTask(todos[i]) });
        buttonWrapper.appendChild(finishedButton);
        if ((todos[i].finished) == true) {
            liTodos.className = "finished";
            finishedButton.className = "fas fa-check-circle"; ///// When clicked button changes appearance ///
            finishedButton.addEventListener("click", () => { undoFinishTask(todos[i]) });
        }

        ///// (Creating delete button inside each list item) /////
        let deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton";
        deleteButton.className = "fas fa-times";
        deleteButton.addEventListener("click", () => { deleteTask(todos[i]) });
        buttonWrapper.appendChild(deleteButton);

    }
}

//////////////////// Function to checkmark a todo as finished //////////////////////////

function finishTask(object) {
    object.finished = true;
    ulTodos.innerHTML = "";
    runLoop();
}

//////////////////////// Function to uncheck same todo //////////////////////

function undoFinishTask(object) {
    object.finished = false;
    ulTodos.innerHTML = "";
    runLoop();
}

///////////////////////// Function to delete a todo ///////////////////////////////

function deleteTask(object) {
    object.deleted = true;
    ulTodos.innerHTML = "";
    runLoop();
}

//////////////////////// Function to add a new todo ///////////////////////////////

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

/////////////////////// Function to sort tasks alphabetically //////////////////////

function sortList() {
    todos.sort(function(a, b) {
        let x = a.task.toLowerCase();
        let y = b.task.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    ulTodos.innerHTML = "";
    runLoop();
}