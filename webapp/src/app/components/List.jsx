import ToDoItem from './ToDoItem';
import updateToDo from '../common/updateToDo';

export default function List(props){
    const toDos = props.list;
    const updateItems = props.updateItems;
    console.log("re-rendering List");
    return (
        <div className="container">
            <ul className='flex flex-col items-end w-6/12 ml-20'>
                {toDos.map((item) => {
                    return <ToDoItem key={item.id} item={item} updateToDo={updateToDo} updateItems={updateItems}/>
                })}
            </ul>
        </div>
    )
}