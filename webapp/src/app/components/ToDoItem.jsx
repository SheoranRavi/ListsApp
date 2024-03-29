import { useState } from "react";
import toDoStates from "../common/toDoStates";

export default function ToDoItem(props) {
	console.log("re-rendering ToDoItem");
	const item = props.item;
	const [checkedState, setCheckedState] = useState(item.checkedState);
	const updateToDo = props.updateToDo;
	const updateItems = props.updateItems;

	const stateChangeHandler = (e) => {
		console.log("onChange for checkbox fired");
		const newCheckedState = !checkedState;
		item.checkedState = newCheckedState;
        
        // set item state
        if(item.checkedState === true){
            console.log('setting item state completed')
            item.state = toDoStates.completed;
        }
        else if(item.checkedState === false){
            console.log('setting item state active')
            item.state = toDoStates.active;
        }

		updateToDo(item);
		setCheckedState(newCheckedState);
	};

	const updateItem = (e) => {
		console.log("checkbox state changed");
        setTimeout(updateItems, 1000);
	};

	return (
		<>
			<div className="flex bg-[#9df9ef] space-x-5 w-10/12 p-2 justify-between 
            items-center border rounded-lg drop-shadow"
            draggable={true}>
				<input
					checked={checkedState}
					type="checkbox"
					className="h-8 w-8 pt-6 bg-gray-100"
					onClick={stateChangeHandler}
					onChange={updateItem}
				></input>
				<div className="flex space-x-4 w-full justify-start">{item.text}</div>
			</div>
		</>
	);
}
