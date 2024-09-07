import { useState } from "react";
import './TodoItem.css'

function TodoItem({text}) {
    const [isDone, setIsDone] = useState(false);

    function changeTaskStatus () {
       isDone ? setIsDone(false) : setIsDone(true)
    }

    return ( 
        <li> 
            <div>
                <input type="checkbox" onChange={changeTaskStatus} />
                <span className={isDone ? 'task-text done' : 'task-text'}>{text}</span>
            </div>
            <div>
                <button className="item-btn edit-btn" type="button"></button>
                <button className="item-btn delete-btn" type="button"></button>
            </div>
        </li>
     );
}

export default TodoItem;