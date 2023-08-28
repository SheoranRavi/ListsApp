import { useState } from "react";
import deleteToDoById from "../common/deleteToDoById";

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
		updateToDo(item);
		setCheckedState(newCheckedState);
	};

	const updateItem = (e) => {
		console.log("checkbox state changed");
	};

	const removeItem = (e) => {
		deleteToDoById(item.id);
		updateItems();
	};

	return (
		<>
			<div className="flex space-x-5 w-10/12 justify-between items-start">
				<input
					checked={checkedState}
					type="checkbox"
					className="h-4 w-4 bg-gray-100"
					onClick={stateChangeHandler}
					onChange={updateItem}
				></input>
				<div className="flex space-x-4 w-full justify-start">{item.text}</div>
				<div
					className="cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-small rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
					onClick={removeItem}
				>
					X
				</div>
			</div>
		</>
	);
}
