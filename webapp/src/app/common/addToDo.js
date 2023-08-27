export default function addToDo(item){
    if(item.id === undefined || item.text === undefined || item.checkedState === undefined){
        throw new Error("The todo item is not correct");
    }
    let currentToDos = JSON.parse(localStorage.getItem('toDosList'));
    if(!Array.isArray(currentToDos) || currentToDos.length === undefined)
        currentToDos = [];
    currentToDos.push(item);
    localStorage.setItem("toDosList",JSON.stringify(currentToDos));
}