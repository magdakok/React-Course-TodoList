import React, {Component} from "react";

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleRemove(e){
        this.props.removeTodo(e.target.id);
    }

    handleCompleted(){
        this.props.markCompleted(this.props.id)
    }

    handleEdit(e){
        console.log('editing');
    }

    render(){
        return (
            <div className="Todo">
                <div className={`Todo__text ${this.props.isDone && `Todo__text-done`}`} onClick={this.handleCompleted}>{this.props.todo}</div>
                <button onClick={this.handleEdit} id={this.props.id}>EDIT</button>
                <button onClick={this.handleRemove} id={this.props.id}>X</button>
            </div>
        )
    }
}

export default Todo;