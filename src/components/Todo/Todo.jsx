import { useState } from "react";
import Button from "../Button/Button";
import TodoList from "../TodoList/TodoList";
import './Todo.css'

function Todo() {
    const [todoList, setTodoList] = useState([])

    const [inputValue, setInputValue] = useState('');

    function updateInput (e) {
        setInputValue(e.target.value)
    }

    function addTodo () {
        if (inputValue && inputValue.trim() !== '') {
            const newList = [...todoList, inputValue]
            setTodoList(newList)
            setInputValue('');
        } 
    }

    function deleteTask (e) {
        setTodoList(todoList.filter(task => task !== e.target.id))

    }

    function editTask (e) {
        console.log('btn edit');
    }

    return ( 
        <>
            <h1 className="todo-title">Todo list</h1>
            <div className="todo-box">
                <div className="todo-field">
                    <input type="text" className="todo-input" onChange={updateInput} placeholder="add a task" value={inputValue}  />
                    <Button onClick={addTodo}>ADD</Button>
                </div>
                <TodoList todoList={todoList} onClickDelete={deleteTask} onClickEdit={editTask}/>    
            </div>
        </>
     );
}

export default Todo;