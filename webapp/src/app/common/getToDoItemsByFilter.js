import toDoStates from "./toDoStates";
export default function getToDoItemsByFilter(filter){
    let items = JSON.parse(localStorage.getItem('toDosList'));
    if(!items || !Array.isArray(items)){
        return [];
    }
    console.log('filtering items based on filter: ' + filter);
    if (filter === toDoStates.all){
        return items;
    }
    items = items.filter(item => {
        if(item.state === undefined)
            item.state = toDoStates.active;
        console.log('item state: ', item.state);
        console.log('ravi');
        return item.state === filter;
    })
    console.dir(items);
    return items;
}