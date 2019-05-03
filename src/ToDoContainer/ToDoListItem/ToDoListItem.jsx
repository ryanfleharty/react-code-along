import React from 'react';
import './style.css';

const ToDoListItem = (props) => {
    return (
        <div className="to-do-list-item">
            <h1>{props.person.name} should be the {props.number} victim</h1>
        </div>
    )
}

export default ToDoListItem;