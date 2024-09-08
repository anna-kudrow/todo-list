import TodoItem from "../TodoItem/TodoItem";
import './TodolIst.css'

function TodoList({todoList, onClickEdit, onClickDelete}) {
console.log(todoList);

    return ( 
        <ul className="todo-list">
            {todoList.map(item => <TodoItem key={item} id={item} text={item} onClickEdit={onClickEdit} onClickDelete={onClickDelete}/>)}
        </ul>
     );

}

export default TodoList;