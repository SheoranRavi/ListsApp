import List from './List';
import NewToDo from './NewToDo';
import addToDo from '../common/addToDo';
import Filters from './Filters';
import { useState } from 'react';
import { useEffect } from 'react';
import filterItemsByState from '../common/filterItemsByState';
import toDoStates from '../common/toDoStates';
import getItemsByCategory from '../common/getItemsByCategory';
import Navbar from './NavBar';

export default function ToDoFrame(){

    console.log('re-rendering ToDoFrame');

    const [filterState, setFilter] = useState(toDoStates.active);
    const [currentCategory, setCategory] = useState('');
    const [stateFilteredItems, setStateFilteredItems] = useState([]);

    const handleToDoItemsUpdate = () => {
        let allItems = getItemsByCategory(currentCategory);
        let filteredItems = filterItemsByState(allItems, filterState);
        setStateFilteredItems(filteredItems);
    }

    useEffect(() => {
        let allItems = getItemsByCategory(currentCategory);
        let filteredItems = filterItemsByState(allItems, filterState);
        setStateFilteredItems(filteredItems);
    }, [filterState, currentCategory])

    return (
        <>
            <Navbar currentCategory={currentCategory} setCategory={setCategory}></Navbar>
            <NewToDo addToDo={addToDo} handleItemsUpdate={handleToDoItemsUpdate} currentCategory={currentCategory}/>
            <List list={stateFilteredItems} updateItems={handleToDoItemsUpdate}></List>
            <Filters setFilter={setFilter} 
                    filterState={filterState} 
                    updateItems={handleToDoItemsUpdate}
                    currentCategory={currentCategory}></Filters>
        </>
    )
}