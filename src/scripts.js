var inputText = document.querySelector('#inputText')
var btnAdd = document.querySelector('#btnAdd')
var listView = document.querySelector('#list')
btnAdd.addEventListener('click', addTodo)

var arr = JSON.parse(localStorage.getItem('todo_list')) || []

function saveState(){
    localStorage.setItem('todo_list',JSON.stringify(arr))
}

function render (){ 
    listView.innerHTML = ''
    for (pos of arr){
        var listTodo = document.createElement('li')
        var todoText = document.createTextNode(pos)

        listTodo.appendChild(todoText)
        listView.appendChild(listTodo)
    }
}
render()

function addTodo(){
    
    var todoText = inputText.value
    if(todoText == ''){
        alert(`O campo não pode ficar vazio`)
    }else{
        arr.push(todoText)
        inputText.value = ''
        console.log(arr)   
        render()
        saveState()
    }
}
function deleteTodo(pos){

}