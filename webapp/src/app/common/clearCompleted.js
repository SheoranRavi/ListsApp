import listCategories from "./listCategories";
import toDoStates from "./toDoStates";

export default function clearCompleted(category) {
	let currentToDos = JSON.parse(localStorage.getItem("toDosList"));
	if (!Array.isArray(currentToDos) || currentToDos.length === undefined)
		return;
	if (category === undefined || category === null) {
		throw Error("category not supplied in clear function");
	}

	var toBeCleared = currentToDos.filter((x) => {
        // to handle legacy items
        if(category === listCategories.default && x.category === undefined && x.state === toDoStates.completed)
            return true;
		return x.category === category && x.state == toDoStates.completed;
	});

	currentToDos = currentToDos.filter((x) => !toBeCleared.includes(x));

	localStorage.setItem("toDosList", JSON.stringify(currentToDos));
}
