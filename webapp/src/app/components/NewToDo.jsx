import { useState } from "react";
import toDoStates from "../common/toDoStates";

export default function NewToDo(props) {
	// do form validation
	// if all good save the item to localStorage
	const addToDo = props.addToDo;
	const handleItemsUpdate = props.handleItemsUpdate;
	const [toDoText, setToDoText] = useState("");
	const [showError, setShowError] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		let form = e.target;
		const formData = new FormData(form);
		e.target.reset();
		setToDoText("");
		var newItem = {};
		newItem.text = formData.get("toDoItem");
		newItem.id = crypto.randomUUID();
		newItem.checkedState = false;
        newItem.state = toDoStates.active;
		addToDo(newItem);
		handleItemsUpdate();
	};

	const updateToDoText = (e) => {
		let text = e.target.value;
		setToDoText(text);
		if (text.length > 0 && text.length < 3) {
			setShowError(true);
		} else setShowError(false);
	};

	return (
		<div className="flex flex-col grow justify-center w-half pb-4">
			<form
				onSubmit={handleSubmit}
				className="flex justify-center bg-white shadow-md rounded-lg pt-2 pb-2 mb-2"
			>
				<input
					id="newNote"
					className="block border border-slate-300 rounded-md drop-shadow-lg py-2 pl-2 pr-3 focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm focus:ring-sky-500"
					type="text"
					name="toDoItem"
					placeholder="Enter To Do Item"
					required={true}
					pattern="^.{3,500}$"
					value={toDoText}
					onChange={updateToDoText}
				/>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
					Add
				</button>
			</form>
			{
				<div className="h-0.5 text-xs">
					{showError && (
						<div className="flex justify-center text-red-700">
							ToDo needs to be at least 3 letters long.
						</div>
					)}
				</div>
			}
		</div>
	);
}
