export default function deleteList(listName){
    console.log('deleteList called with: ' + listName);
    var categoriesStr = localStorage.getItem('listCategories');
    var listCategories = JSON.parse(categoriesStr);
    var keyToDelete = Object.keys(listCategories).find(key => listCategories[key] === listName);
    if(keyToDelete === null || keyToDelete === undefined || keyToDelete === ''){
        console.log(`list with name ${listName} not found.`);
        return;
    }
    clearItemsInList(listName, listCategories);
    
    delete listCategories[keyToDelete];
    categoriesStr = JSON.stringify(listCategories);
    localStorage.setItem('listCategories', categoriesStr);
}

function clearItemsInList(listName, listCategories){
    let currentToDos = JSON.parse(localStorage.getItem("toDosList"));
    if(currentToDos === null)
        return;
    var toBeCleared = currentToDos.filter((x) => {
        // to handle legacy items
        if(listName === listCategories.default && x.category === undefined)
            return true;
		return x.category === listName;
	});
    
    if(toBeCleared.length === 0)
        return;

	currentToDos = currentToDos.filter((x) => !toBeCleared.includes(x));

	localStorage.setItem("toDosList", JSON.stringify(currentToDos));
}