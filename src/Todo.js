import React, {Component} from "react";

class Todo extends Component {
    render(){
        return (
            <div className="Todo">
                <div className="Todo__text">{this.props.todo}</div><button>X</button>
            </div>
        )
    }
}

export default Todo;