import toDoStates from "./toDoStates";

export default function clearCompleted(category){
    let currentToDos = JSON.parse(localStorage.getItem('toDosList'));
    if(!Array.isArray(currentToDos) || currentToDos.length === undefined)
        return;
    if(category === undefined || category === null){
        throw Error("category not supplied in clear function");
    }
    
    var toBeCleared = currentToDos.filter(x => x.category === category &&
        x.state == toDoStates.completed);
    currentToDos = currentToDos.filter(x => !toBeCleared.includes(x));
    
    localStorage.setItem("toDosList",JSON.stringify(currentToDos));
}