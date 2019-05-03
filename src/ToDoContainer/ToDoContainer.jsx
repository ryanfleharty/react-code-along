import React, {Component} from 'react';

class ToDoContainer extends Component{
    constructor(){
        super();
        this.state = {
            list: [
                {"name": "Cersei", "motivation": "Lannister"},
                {"name": "The Hound", "motivation": "Butcher's boy"}
            ]
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {/* // YOU DO: add two list items, one for each in the state's list */}
                </ul>
            </div>
        )
    }
}

export default ToDoContainer;