import List from './List';
import NewToDo from './NewToDo';
import addToDo from '../common/addToDo';
import { useState } from 'react';
import { useEffect } from 'react';
import getToDoItems from '../common/getToDoItems';

export default function ToDoFrame(){
    const [toDoItems, setToDoItems] = useState([]);
    console.log('re-rendering ToDoFrame');

    const handleToDoItemsUpdate = () => {
        setToDoItems(getToDoItems);
    }

    useEffect(() => {
        setToDoItems(getToDoItems());
    }, [])

    return (
        <>
            <NewToDo addToDo={addToDo} handleItemsUpdate={handleToDoItemsUpdate}/>
            <List list={toDoItems} updateItems={handleToDoItemsUpdate}></List>
        </>
    )
}