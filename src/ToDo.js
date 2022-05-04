import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="Task" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;
