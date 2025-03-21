let task = document.getElementById("text");
let list_task = document.getElementById("list-task");
let btn = document.getElementById("btnAdd");
let content = [];

/*restore storage data after reload*/
if(localStorage.getItem("product") !== null){
    content = JSON.parse(localStorage.getItem("product"));
    show();
}

/*Add new task on button click*/
btn.onclick = function () {        // As soon as the button "Add" is pressed
    if(task.value !== ''){         //Check if there is something written in the text field
        let current_task = {
            name:task.value
        }                            // create new element
        content.push(current_task);  //move it to array (or task's list)
        console.log(content);         //debugging process
    }
    show();
    clear();
}

/*Show all tasks*/
function show(){
    let data = '';
    for(let i = 0; i < content.length; i++){
        data +=
            ` 
                <div class="addButton">
                    <span>${content[i].name}</span>
                    <button onclick = "del(${i})" id="btnDelete">Delete</button>
                </div>
            `
    }
    localStorage.setItem("product", JSON.stringify(content));       //save all data to local storage (for reload)
    document.getElementById("list-task").innerHTML = data;

    let btnDelete = document.getElementById("del");
    if (content.length >0){
        btnDelete.innerHTML =  `
            <button id="btnDeleteAll" onclick="delAll()">Delete All</button>
        `
    }
    else{
        btnDelete.innerHTML =
            `
            `
    }
}

function clear(){
    task.value = "";
}

function del(i){
    content.splice(i,1);
    show();
}

function delAll(){
    localStorage.clear();
    content.splice(0);
    show();
}
