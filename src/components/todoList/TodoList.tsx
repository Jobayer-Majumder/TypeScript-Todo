import React from 'react';
import { TodoListProps } from '../../types/types';

const TodoList = ({ name, email, issue, isComplete, id, removeFromDoneList }: TodoListProps) => {
    return (
        <>
            <div className="container pt-4">
                <div className="p-4 border shadow-sm w-75 mx-auto">
                    <div className="d-flex justify-content-between">
                        <h6 className='text-bold'>{name} {''}
                            <span className={`badge ${isComplete ? 'bg-success' : 'bg-danger'}`}>{isComplete ? 'Completed' : 'On hand'}</span>
                        </h6>
                        
                        <button onClick={() => removeFromDoneList(id)} className=" btn btn-outline-danger">X</button>
                    </div>
                    <p className='text-secondary'>{email}</p>
                    <p className='text-secondary'>{issue}</p>
                    <div className="d-flex justify-content-end">
                        <button className={`btn ${isComplete ? 'btn-danger' : 'btn-success'}`}>Add to Done List</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TodoList;