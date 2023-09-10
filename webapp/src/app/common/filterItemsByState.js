import toDoStates from "./toDoStates";
export default function filterItemsByState(items, filter){
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
        return item.state === filter;
    })
    console.dir(items);
    return items;
}