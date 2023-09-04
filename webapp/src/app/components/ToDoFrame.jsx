import List from './List';
import NewToDo from './NewToDo';
import addToDo from '../common/addToDo';
import Filters from './Filters';
import { useState } from 'react';
import { useEffect } from 'react';
import getToDoItemsByFilter from '../common/getToDoItemsByFilter';
import toDoStates from '../common/toDoStates';

export default function ToDoFrame(){
    const [toDoItems, setToDoItems] = useState([]);
    const [filterState, setFilter] = useState(toDoStates.active);
    console.log('re-rendering ToDoFrame');

    const handleToDoItemsUpdate = () => {
        setToDoItems(getToDoItemsByFilter(filterState));
    }

    useEffect(() => {
        setToDoItems(getToDoItemsByFilter(filterState));
    }, [filterState])

    return (
        <>
            <NewToDo addToDo={addToDo} handleItemsUpdate={handleToDoItemsUpdate}/>
            <List list={toDoItems} updateItems={handleToDoItemsUpdate}></List>
            <Filters setFilter={setFilter} filterState={filterState} updateItems={handleToDoItemsUpdate}></Filters>
        </>
    )
}