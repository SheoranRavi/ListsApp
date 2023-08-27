export default function getToDoItemById(id){
    let items = JSON.parse(localStorage.getItem('toDosList'));
    if(!items || !Array.isArray(items)){
        return [];
    }
    let item = items.filter(x => x.id === id)[0];
    console.log('returning item by id: ', item);
    return item;
}