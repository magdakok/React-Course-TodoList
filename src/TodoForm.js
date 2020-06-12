import React, {Component} from "react";

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = { todo: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ todo: "" });
    }

    render(){
        return (
            <div className="TodoForm">
                <form className="Todo__form" onSubmit={this.handleSubmit}>
                    <input name="todo" value={this.state.todo} onChange={this.handleChange} />
                    <button>ADD</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;