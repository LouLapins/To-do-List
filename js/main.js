window.onload = function() {

    createHeader();

    createListwrapper();

    let heading1 = document.createElement("h2");
    heading1.innerHTML = "To do list:";
    listwrapper.appendChild(heading1);



    let ulToDo = document.createElement("ul");
    ulToDo.id = "todolist";
    listwrapper.appendChild(ulToDo);




    let tasks = ["Do laundry", "Water plants", "Collect parcel", "Buy birthday present", "Pay electricity bill", "Pick up prescription"];

    for (let i = 0; i < tasks.length; i++) {
        let liToDo = document.createElement("li");
        liToDo.innerHTML = tasks[i];
        ulToDo.appendChild(liToDo);
    }

    createFooter();

    createInputField();
    createAddButton();



    addbutton.addEventListener('click',
        function() {
            let liToDo = document.createElement("li");
            liToDo.innerText = inputfield.value;
            ulToDo.appendChild(liToDo);
            inputfield.value = "";
        }
    )



    let list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);






}




function createHeader() {
    let header = document.createElement("header");
    header.id = "header";
    document.body.appendChild(header);
}

function createListwrapper() {
    let listwrapper = document.createElement("div");
    listwrapper.id = "listwrapper";
    document.body.appendChild(listwrapper);
}

function createFooter() {
    let footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);
}

function createInputField() {
    let inputfield = document.createElement("input");
    inputfield.id = "inputfield";
    inputfield.setAttribute("type", "text");
    inputfield.setAttribute("placeholder", "Add a task...")
    footer.appendChild(inputfield);
}

function createAddButton() {
    let addbutton = document.createElement("button");
    addbutton.id = "addbutton";
    addbutton.innerHTML = "+";
    footer.appendChild(addbutton);
}