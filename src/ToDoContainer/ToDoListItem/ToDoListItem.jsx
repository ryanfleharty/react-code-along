import React from 'react';
import './style.css';

const ToDoListItem = (props) => {
    return (
        <div className="to-do-list-item" onClick={(e)=>{
            props.delete(props.number);
        }}>
            <h1>{props.person.name} should be the {props.number} victim</h1>
            <p>They deserve it for {props.person.motivation}</p>
        </div>
    )
}

export default ToDoListItem;