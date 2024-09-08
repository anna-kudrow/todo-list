import { useState } from "react";
import './TodoItem.css'

function TodoItem({text, onClickEdit, onClickDelete, id}) {
    const [isDone, setIsDone] = useState(false);

    function changeTaskStatus () {
       isDone ? setIsDone(false) : setIsDone(true)
    }

    return ( 
        <li className="todo-item" id={id}> 
            <div>
                <input type="checkbox" onChange={changeTaskStatus} />
                <span className={isDone ? 'task-text done' : 'task-text'}>{text}</span>
            </div>
            <div className="todo-tools">
                <button className="item-btn edit-btn"  id={id} type="button" onClick={onClickEdit}></button>
                <button className="item-btn delete-btn" id={id} type="button" onClick={onClickDelete}></button>
            </div>
        </li>
     );
}

export default TodoItem;