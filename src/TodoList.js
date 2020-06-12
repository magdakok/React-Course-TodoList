import React, {Component} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {text: 'buy bread', isDone: 'false', id: 1}
            ]
        }
    }
    render(){
        return (
            <div className="TodoList">
                <h1>TodoList</h1>
                <TodoForm />
                {this.state.todos.map(todo =>(
                    <Todo text={todo.text} isDone={todo.isDone} key={todo.id} />
                ))}
            </div>
        )
    }
}

export default TodoList;