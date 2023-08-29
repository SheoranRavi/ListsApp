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
        <form onSubmit={handleSubmit} className="flex justify-center bg-white shadow-md rounded-lg pt-2 pb-2 mb-4">
            <input 
                className="block border border-slate-300 rounded-md drop-shadow-lg py-2 pl-2 pr-3 focus:outline-none focus:border-sky-500 focus:ring-1 sm:text-sm focus:ring-sky-500"
                type="text" 
                name="toDoItem"
                placeholder="Enter To Do Item"
                required={true}
                pattern="^.{3,500}$"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Add</button>
        </form>
    )
}