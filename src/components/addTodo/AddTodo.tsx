import React from 'react';

const AddTodo = ({handleAddTodo, handleInputChange} : any ) => {
 
        return (
        <div>
            <div className="container">
                <div className="w-50 mx-auto py-5">
                    <h3 className='text-center py-3 text-success'>ADD TODO</h3>
                    <div className="input-group">
                        <input onChange={handleInputChange} type="text" className="form-control" />
                        <button onClick={handleAddTodo} className='btn btn-outline-success'>Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;