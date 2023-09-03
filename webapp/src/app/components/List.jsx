import ToDoItem from './ToDoItem';
import updateToDo from '../common/updateToDo';

export default function List(props){
    const toDos = props.list;
    const updateItems = props.updateItems;
    console.log("re-rendering List");
    return (
        <div className="block h-[400px] overflow-y-scroll">
            <ul className='flex flex-col-reverse items-center w-full'>
                {toDos.map((item) => {
                    return <ToDoItem key={item.id} item={item} updateToDo={updateToDo} updateItems={updateItems}/>
                })}
            </ul>
        </div>
    )
}