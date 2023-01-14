const todoObjectList = [];


class Todo_List{
    constructor (item) {
        this.ulElement =item;
    }
    add() {
        const todoInput = document.querySelector("#input").value;
    if(todoInput == "") {
        alert("Please type to enter!")
    }else{
        const todoObject = {
          id: todoObjectList.length,
          todoText: todoInput,
          isDone: false,
        }
        todoObjectList.unshift(todoObject);
        this.display();
        document.querySelector("#input").value='';
    }
}
    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x);
        console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false? 
        todoObjectList [selectedTodoIndex].isDone = true : 
        todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }
    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z);
        todoObjectList.splice(selectedDelIndex,1);
        this.display();
    }

display() {
this.ulElement.innerHTML = "";

todoObjectList.forEach((object_item) => {

    const liElement = document.createElement("li");
    const delBtn = document.createElement("i");
    
    liElement.innerText = object_item.todoText;
    liElement.setAttribute("data-id", object_item.id);

    delBtn.setAttribute("data-id", object_item.id);
    delBtn.classList.add("far", "fa-trash-alt");

    liElement.appendChild(delBtn);

    delBtn.addEventListener("click",function(e) {
        const deleteId = e.target.getAttribute("data-id");
        myTodoList.deleteElement(deleteId);      
    })
    liElement.addEventListener("click", function(e) {
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.done_undone(selectedId);
    })

    if (object_item.isDone) {
        liElement.classList.add("checked");
    }
    this.ulElement.appendChild(liElement);
    })
}
}

const listSection = document.querySelector("#MyList");

myTodoList= new Todo_List (listSection);

document.querySelector(".submit").addEventListener("click", function() {
    myTodoList.add()    
})
