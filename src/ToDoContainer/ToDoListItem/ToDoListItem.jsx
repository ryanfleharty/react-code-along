import React from 'react';

const ToDoListItem = (props) => {
    return (
        <div>
            <h1>{props.person.name}</h1>
        </div>
    )
}

export default ToDoListItem;