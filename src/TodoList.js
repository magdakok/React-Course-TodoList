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
        this.renderTodos = this.renderTodos.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
    }

    addTodo(todo){
        let newTodo = {...todo, isDone: false, id: uuidv4()}
        this.setState(st=>({
            todos: [newTodo, ...st.todos]
        }))
    }

    markCompleted(itemCompleted){
    let newTodoList = this.state.todos.map(td =>{
            if (td.id === itemCompleted){
                return {...td, isDone: !td.isDone}
            } else {
                return {...td}
            }
        });
        this.setState(st =>({
            todos: [...newTodoList]
        }))
    }

    removeTodo(itemToRemove){
  
        let newTodoList = this.state.todos.filter(td =>{
            return (td.id !== itemToRemove)
        });
        this.setState(st =>({
            todos: [...newTodoList]
        }))
    }

    renderTodos(){
        return(
            this.state.todos.map(todo =>(
                <Todo todo={todo.todo} isDone={todo.isDone} key={todo.id} id={todo.id} removeTodo={this.removeTodo} markCompleted={this.markCompleted} />
            ))
        )
    }

    render(){
        return (
            <div className="TodoList">
                <h1>TodoList</h1>
                <TodoForm addTodo={this.addTodo}/>
                {this.state.todos[0] ? this.renderTodos() : 'Add your first todo!'}
            </div>
        )
    }
}

export default TodoList;