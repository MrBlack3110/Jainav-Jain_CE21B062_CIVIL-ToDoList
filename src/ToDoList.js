import React from 'react';
import ToDo from './ToDo';


const ToDoList = (props) => {

    return (
        <div>
            {props.toDoData.map(todo => {
                return (
                    <ToDo todo={todo} 
                    handleToggle={props.handleToggle} 
                    />
                )
            })}
            <button style={{margin: '20px'}} onClick={props.handleFilter}>Delete Completed Tasks</button>
        </div>
    );
};



export default ToDoList;
