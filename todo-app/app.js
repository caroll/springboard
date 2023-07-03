const form = document.querySelector("form");
const inputTodo = document.querySelector('input[name="todo-item"]');
const listTodo = document.querySelector("#list-todo");

form.addEventListener( "submit" , function(e) {
    e.preventDefault();
    const newCheck = document.createElement("input");
    newCheck.setAttribute("type" , "checkbox");
    const newText = document.createElement("span");
    newText.textContent = inputTodo.value;
    const newLi = document.createElement("li");
    const newBtn = document.createElement("button");
    newBtn.textContent = "Remove";
    newBtn.classList.add("delete");
    newLi.appendChild(newCheck);
    newLi.appendChild(newText);
    newLi.appendChild(newBtn);

    listTodo.appendChild(newLi);
    inputTodo.value = "";
});

listTodo.addEventListener( "click" , function(x) {
    console.log(x.target.checked);
    console.log(x.target.parentNode);
    if (x.target.checked ){
        console.log(x.target.parentNode);
        x.target.parentElement.classList.add("strike");
    } else {
        x.target.parentElement.classList.remove("strike");
    }
});
listTodo.addEventListener( "click" , function(x) {
    if (x.target.tagName === 'BUTTON' ){
        x.target.parentNode.remove();
    }
});

