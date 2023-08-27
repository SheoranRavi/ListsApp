import ToDoItem from './ToDoItem';
import updateToDo from '../common/updateToDo';

export default function List(props){
    const toDos = props.list;
    console.log("re-rendering List");
    return (
        <div className="container">
            <ul className='flex flex-col items-baseline pd-30 ml-40'>
                {toDos.map((item) => {
                    return <ToDoItem key={item.id} item={item} updateToDo={updateToDo}/>
                })}
            </ul>
        </div>
    )
}