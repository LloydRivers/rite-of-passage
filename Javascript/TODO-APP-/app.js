// let todos = [{title:"Eat food", date:date, id;1}]

let todos;
let getFromStorage = JSON.parse(localStorage.getItem("todos"));
if (getFromStorage.length > 0) {
  todos = getFromStorage;
} else {
  todos = [];
}
let button = document.getElementById("button");
button.addEventListener("click", addData);

function addData() {
  let text = document.getElementById("text").value;
  let date = document.getElementById("date").value;
  let id = "" + new Date().getTime();
  todos.push({ title: text, date: date, id: id });
  
  sendToStorage();
  render();
}
function sendToStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

let deleteData = (e) => {
  
  let target = e.target.id;
  console.log(target)
  todos = todos.filter((todo) => {
    if (target === todo.id) {
      return false;
    } else {
      return true;
    }
  });
  sendToStorage() 
  render();
};

function render() {
  document.getElementById("display").innerHTML = "";
  todos.map((todo) => {
    let paragraph = document.createElement("p");
    paragraph.innerText = todo.title +" "+ todo.date;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.id = todo.id;
    deleteButton.setAttribute("class", "deleteBtn")
    deleteButton.onclick = deleteData;
    deleteButton.style.marginLeft = "50px";
    paragraph.appendChild(deleteButton);
    console.log();
    let display = document.getElementById("display");
    display.appendChild(paragraph);
  });
}
render();
