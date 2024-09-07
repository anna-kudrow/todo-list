import TodoItem from "../TodoItem/TodoItem";
import './TodolIst.css'

function TodoList({todoList}) {
    return ( 
        <ul className="todo-list">
            {todoList.map(item => <TodoItem key={item} text={item}/>)}
        </ul>
     );
}

export default TodoList;