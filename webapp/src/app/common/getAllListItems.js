export default function getAllListItems(){
    let items = JSON.parse(localStorage.getItem('toDosList'));
    if(!items || !Array.isArray(items)){
        return [];
    }
    return items;
}