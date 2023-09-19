import getAllListItems from "./getAllListItems";
import getItemsByCategory from "./getItemsByCategory";
import getListCategories from "./getListCategories";
import storeCategories from "./storeCategories";

export default function editListName(listNewName, listOldName){
    let allCategories = getListCategories();
    var keyToDelete = Object.keys(allCategories).find(key => allCategories[key] === listOldName);
    allCategories[listNewName] = listNewName;
    delete allCategories[keyToDelete];
    storeCategories(allCategories);
    let allItems = getAllListItems();
    allItems.forEach(element => {
        if(element.category === listOldName)
            element.category = listNewName;
    });

    localStorage.setItem('toDosList', JSON.stringify(allItems));
}