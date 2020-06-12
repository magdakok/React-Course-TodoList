import React, {Component} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
    render(){
        return (
            <div className="TodoList">
                <h1>TodoList</h1>
                <Todo />
                <TodoForm />
            </div>
        )
    }
}

export default TodoList;