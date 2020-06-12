import React, {Component} from "react";

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e){
        this.props.removeTodo(e.target.id);
    }

    render(){
        return (
            <div className="Todo">
                <div className="Todo__text">{this.props.todo}</div><button onClick={this.handleRemove} id={this.props.id}>X</button>
            </div>
        )
    }
}

export default Todo;