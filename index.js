var form = document.getElementById("add-todo");
var todoList = document.getElementById("todo-list");


form.onsubmit = function(e) {
    e.preventDefault();
    var textInput = document.querySelector('input').value;
    console.log(textInput);
   
    if (textInput.trim() !== "") {
        var li = document.createElement("li");
        var btn = document.createElement("button");
       
        li.appendChild(btn);
        btn.innerHTML = textInput;
        todoList.appendChild(li);

        form.reset();

    } else {
        form.reset();
        return;
    }
}

todoList.addEventListener("click", e => {
    if (e.target.style.textDecoration != "line-through") {
            e.target.style.textDecoration = "line-through";
    } else if (e.target.style.textDecoration = "line-through") {
            e.target.parentElement.remove();
    }
})
