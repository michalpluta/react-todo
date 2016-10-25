import React from 'react';
import _ from 'lodash';
import CreateTodo from './CreateTodo';
import TodosList from './TodosList';


const todos = [
    {
        task: 'make react totorial',
        isCompleted : false,
    },
    {
        task: 'eat dinner',
        isCompleted : true,
    }
];



export default class Init extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos: todos
        };
    }


    render(){
        return(
            <div>
                <h1>REACT ToDo App</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                <TodosList 
                    todos={this.state.todos} 
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}

                />
            </div>
        );
    }

    createTask(task){
        this.state.todos.push({
            task: task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos })
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos})
    }

    saveTask(oldTask, newTask){
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }
}