import { useState } from "react";
import getToDoItemById from "../common/getToDoById";
import deleteToDoById from "../common/deleteToDoById";

export default function ToDoItem(props){
    console.log('re-rendering ToDoItem');
    const item = props.item;
    const [checkedState, setCheckedState] = useState(item.checkedState);
    const updateToDo = props.updateToDo;

    const stateChangeHandler = (e) => {
        console.log("onChange for checkbox fired");
        const newCheckedState = !checkedState;
        item.checkedState = newCheckedState;
        updateToDo(item);
        setCheckedState(newCheckedState);
    }

    const updateItem = (e) => {
        
    }

    const removeItem = (e) => {
        deleteToDoById(item.id);
    }

    return (
        <>
            <div className="flex space-x-5 flex-row flex-nowrap justify-center">
                <input 
                    checked={checkedState} 
                    type="checkbox" 
                    className="h-4 w-4 bg-gray-100"
                    onClick={stateChangeHandler}
                    onChange={updateItem}></input>
                <div className="flex space-x-4 justify-center items-stretch">
                    <div className="flex space-x-4 bg-blue leading-3 list-outside">
                        {item.text}
                    </div>
                    <span 
                        className="self-end cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-small rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={removeItem}>X
                    </span>
                </div>
            </div>
        </>
    )
}