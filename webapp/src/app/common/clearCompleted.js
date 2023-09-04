import toDoStates from "./toDoStates";

export default function clearCompleted(){
    let currentToDos = JSON.parse(localStorage.getItem('toDosList'));
    if(!Array.isArray(currentToDos) || currentToDos.length === undefined)
        return;
    currentToDos = currentToDos.filter(x => x.state === undefined ||
        x.state !== toDoStates.completed);
    localStorage.setItem("toDosList",JSON.stringify(currentToDos));
}