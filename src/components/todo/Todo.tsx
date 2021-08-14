import React from 'react';
import { Todo } from '../../types/types';
import AddTodo from '../addTodo/AddTodo';



const Todos = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);
    const [inputValue, setInputValue] = React.useState('')


    const handleInputChange = (e: any) => {
        const value = e.target.value
        setInputValue(value)
    }

    const handleAddTodo = (e: any) => {
        e.preventDefault()

        const todo: Todo = {
            id: Math.random(),
            isCompleted: false,
            value: inputValue
        };

        setTodos([...todos, todo])
        setInputValue('')
    }

    return (
        <>
            <AddTodo 
                handleAddTodo={handleAddTodo}
                handleInputChange={handleInputChange}
            />

            {
                todos.map(todo => <li>{todo.value}</li>)
            }
        </>
    );
};

export default Todos;