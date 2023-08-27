export default function NewToDo(props){
    // do form validation
    // if all good save the item to localStorage
    const addToDo = props.addToDo;
    const handleItemsUpdate = props.handleItemsUpdate;
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        const formData = new FormData(form);
        e.target.reset();
        var newItem={};
        newItem.text = formData.get('toDoItem');
        newItem.id = crypto.randomUUID();
        newItem.checkedState = false;
        addToDo(newItem);
        handleItemsUpdate();
    }

    return(
        <form onSubmit={handleSubmit} className="flex justify-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input 
                className="border border-solid"
                type="text" 
                name="toDoItem"
                placeholder="Enter To Do Item"
                required={true}
                pattern="^.{3,500}$"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
    )
}