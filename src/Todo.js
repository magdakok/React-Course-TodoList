import React, {Component} from "react";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = { isEditing: false, todo: this.props.todo }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleRemove(e){
        this.props.removeTodo(e.target.id);
    }

    handleCompleted(){
        this.props.markCompleted(this.props.id)
    }

    toggleEdit(e){
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleSave(e){
        e.preventDefault();
        this.props.updateTodo(this.props.id, this.state.todo);
        this.toggleEdit();
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        let result;
        if (this.state.isEditing) {
            result = 
            <div>
                <form className="TodoForm__form">
                    <input type='text' name="todo" value={this.state.todo} autoFocus={true} onChange={this.handleChange}/>
                    <button onClick={this.handleSave} id={this.props.id}>SAVE</button>
                    <button onClick={this.handleRemove} id={this.props.id}>X</button>
                </form>
            </div>
        } else {
            result =
            <div className="Todo">
                <div className={`Todo__text ${this.props.isDone && `Todo__text-done`}`} onClick={this.handleCompleted}>{this.props.todo}</div>
                <button onClick={this.toggleEdit} id={this.props.id}>EDIT</button>
                <button onClick={this.handleRemove} id={this.props.id}>X</button>
            </div>
        };

        return (
           result
        )
    }
}

export default Todo;