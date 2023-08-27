export default function deleteToDoById(id){
    let currentToDos = JSON.parse(localStorage.getItem('toDosList'));
    if(!Array.isArray(currentToDos) || currentToDos.length === undefined)
        return;
    currentToDos = currentToDos.filter(x => x.id !== id);
    localStorage.setItem("toDosList",JSON.stringify(currentToDos));
}