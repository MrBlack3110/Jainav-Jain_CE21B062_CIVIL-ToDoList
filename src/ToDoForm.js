import React, { useState } from 'react';

const ToDoForm = ({ addTask}) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Write Your New Task..."/>
            <button  onClick={handleSubmit}>Add</button>
        </form>
    );
};

export default ToDoForm;