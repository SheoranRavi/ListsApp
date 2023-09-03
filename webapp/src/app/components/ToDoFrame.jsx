import List from './List';
import NewToDo from './NewToDo';
import addToDo from '../common/addToDo';
import Filters from './Filters';
import { useState } from 'react';
import { useEffect } from 'react';
import getToDoItems from '../common/getToDoItems';
import getToDoItemsByFilter from '../common/getToDoItemsByFilter';

export default function ToDoFrame(){
    const [toDoItems, setToDoItems] = useState([]);
    console.log('re-rendering ToDoFrame');

    const handleToDoItemsUpdate = () => {
        setToDoItems(getToDoItems);
    }

    const filterCallback = (filter) => {
        let items = getToDoItemsByFilter(filter);
        setToDoItems(items);
    }

    useEffect(() => {
        setToDoItems(getToDoItems());
    }, [])

    return (
        <>
            <NewToDo addToDo={addToDo} handleItemsUpdate={handleToDoItemsUpdate}/>
            <List list={toDoItems} updateItems={handleToDoItemsUpdate}></List>
            <Filters selectFilterCallback={filterCallback}></Filters>
        </>
    )
}