import { useState } from "react";
import Button from "../Button/Button";

function Todo() {
    const [todoList, setTodoList] = useState([])

    const [inputValue, setInputValue] = useState('');

    function updateInput (e) {
        setInputValue(e.target.value)
    }

    function addTodo () {
        
    }

    return ( 
        <>
            <h1 className="todo-title">Todo list</h1>
            <div className="todo-box">
                <input type="text" className="todo-input" onChange={updateInput}  />
                <Button onClick={addTodo}>Добавить</Button>

            </div>
        </>
     );
}

export default Todo;