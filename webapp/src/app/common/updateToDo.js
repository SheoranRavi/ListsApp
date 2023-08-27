export default function updateToDo(item){
    console.log('updateToDo called with item:', item);
    let currentToDos = JSON.parse(localStorage.getItem('toDosList'));
    var itemIdx = currentToDos.findIndex(x => x.id == item.id);
    if(!currentToDos || !Array.isArray(currentToDos) || currentToDos.length == 0)
        return;
    currentToDos[itemIdx].checkedState = item.checkedState;
    currentToDos[itemIdx].text = item.text;
    localStorage.setItem('toDosList', JSON.stringify(currentToDos));
}