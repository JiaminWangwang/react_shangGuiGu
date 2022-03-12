import React from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import './App.css';

export default class App extends React.Component{
    // 状态在哪里，操作状态的代码就应该在哪里

    // 初始化状态
    state={
        todos: [
            {id: 1, name: '吃饭', done: true},
            {id: 2, name: '睡觉', done: false},
            {id: 3, name: '敲代码', done: true},
        ]
    }

    addTodo = (todoObj)=> {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];

        this.setState({
            todos: newTodos
        })
    }

    updateTodo = (id, done) => {
        const {todos} = this.state;

        const newTodos = todos.map((todoObj) => {
            if(todoObj.id === id) return {...todoObj, done}
            else return todoObj
        })

        this.setState({todos: newTodos})
    }

    deleteTodo = (id) => {
        const {todos} = this.state;

        const newTodos = todos.filter(todoObj => {
            return todoObj.id !== id
        })

        this.setState({todos: newTodos})
    }

    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map(todoObj => {
            return {...todoObj, done}
        })
        this.setState({
            todos: newTodos
        })
    }

    clearAllDone = ()=> {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })

        this.setState({
            todos: newTodos
        })
    }

    render() {
        return(
            <div className="body_wrapper">
                <Header addTodo={this.addTodo}/>
                <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
            </div>
        )
    }
}