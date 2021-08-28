import React from 'react';
import { InputState } from '../../types/types';
import TodoList from '../TodoList/TodoList';

const Todo = () => {
    const [inputValue, setInputValue] = React.useState<InputState>({} as InputState);
    const [todoList, setTodoList] = React.useState<InputState[]>([]);
    // => {} : () <InputState>  as InputState

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value, isComplete: false, id: Math.random()*2 })
    }

    const handleAddIssue = () => {
        setTodoList([inputValue].concat(...todoList))
        setInputValue({
            name: '',
            email: '',
            issue: ''
        } as InputState)
    }

    const removeFromDoneList = (id : Number) => {
        let filtered = todoList.filter(todo => todo.id !== id);
        setTodoList(filtered)
    };

    return (
        <section>
            <div className="container py-4">
                <div className="d-flex justify-content-evenly">
                    <div className="">
                        <input type="text" value={inputValue.name} name='name' onChange={handleInputChange} className="form-control" placeholder='Your Name' />
                    </div>
                    <div className="">
                        <input type="email" value={inputValue.email} name='email' onChange={handleInputChange} className="form-control" placeholder='Your Email' />
                    </div>
                    <div className="">
                        <input type="text" value={inputValue.issue} name='issue' onChange={handleInputChange} className="form-control" placeholder='Leave Your Issue' />
                    </div>
                    <div className="">
                        <button onClick={handleAddIssue} className="btn btn-outline-success">Add Issue</button>
                    </div>
                </div>
                {
                    todoList.map(todo =>
                        <TodoList
                            key={Math.random()}
                            id={todo.id}
                            name={todo.name}
                            email={todo.email}
                            issue={todo.issue}
                            isComplete={todo.isComplete}
                            removeFromDoneList={removeFromDoneList}
                        />)
                }
            </div>
        </section>
    );
};

export default Todo;