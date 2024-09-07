import { useState } from "react";
import Button from "../Button/Button";
import TodoList from "../TodoList/TodoList";


// Вторым шагом можно добавить к каждой задаче кнопки редактирования и удаления.

// Никакие стейт менеджеры не используем, передаём данные через пропсы.

// Так же не забываем, что мы фронтендеры и наши приложения должны выглядеть красиво 🙂 Поэтому вот список требований по стилизации:
// - Компонент должен быть отцентрирован
// - Инпут и кнопка должны быть одной высоты
// - Кнопки редактирования и удаления можно оформить иконками, а так же показывать их только при ховере на всю задачу

// Можно выбрать любой UI Kit (MUI, Shadcn, Ant...)

// UX (Не обязательно, но желательно):
// - Когда фокус на инпуте, при нажатии на ентер добавляем / редактируем задачу

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

    return ( 
        <>
            <h1 className="todo-title">Todo list</h1>
            <div className="todo-box">
                <input type="text" className="todo-input" onChange={updateInput} placeholder="add a task" value={inputValue}  />
                <Button onClick={addTodo}>ADD</Button>
                <TodoList todoList={todoList}/>    
            </div>
        </>
     );
}

export default Todo;