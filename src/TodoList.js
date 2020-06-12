import React, {Component} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
        {todo: 'buy bread', isDone: false , id: uuidv4() }
            ]
        }
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(todo){
        let newTodo = {...todo, isDone: false, id: uuidv4()}
        this.setState(st=>({
            todos: [newTodo, ...st.todos]
        }))
    }

    render(){
        return (
            <div className="TodoList">
                <h1>TodoList</h1>
                <TodoForm addTodo={this.addTodo}/>
                {this.state.todos.map(todo =>(
                    <Todo todo={todo.todo} isDone={todo.isDone} key={todo.id} />
                ))}
            </div>
        )
    }
}

export default TodoList;