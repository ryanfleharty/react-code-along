import React, {Component} from 'react';

class ToDoContainer extends Component{
    constructor(){
        super();
        this.state = {
            list: [
                {"name": "Cersei", "motivation": "Being a Lannister"},
                {"name": "The Hound", "motivation": "Killing the Butcher's boy"}
            ]
        }
    }
    render(){
        const listItems = this.state.list.map((person, index)=>{
            return <li key={index}>{ person.name } should die for { person.motivation }</li>
        })
        return(
            <div>
                <h1>Here are the future victims</h1>
                <ul>
                    { listItems }
                </ul>
            </div>
        )
    }
}

export default ToDoContainer;