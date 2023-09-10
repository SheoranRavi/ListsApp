import toDoStates from "./toDoStates";
import listCategories from "./listCategories";
export default function getItemsByCategory(category){
    let items = JSON.parse(localStorage.getItem('toDosList'));
    if(!items || !Array.isArray(items)){
        return [];
    }
    console.log('filtering items based on category: ' + category);

    items = items.filter(item => {
        if(category === listCategories.default && item.category === undefined)
            return true;
        return item.category === category;
    })

    console.dir(items);
    return items;
}