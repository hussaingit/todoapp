var list = document.getElementById("list")

function addTodo(){
    var todoItem = document.getElementById("todoItem")
    var li = document.createElement("li")
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","delBtn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","editBtn")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

  todoItem.value = ""
    list.appendChild(li)


}
function deleteItem(e){
e.parentNode.remove()
}
function editItem(m){
     var l = m.parentNode.firstChild.nodeValue
     var lEdit = prompt("Edit value",l)
     m.parentNode.firstChild.nodeValue = lEdit
}

function deletAll(){
    list.innerHTML = ""
}
