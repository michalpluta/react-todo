import React from 'react';
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
                <CreateTodo createTask={this.createTask.bind(this)}/>
                <TodosList todos={this.state.todos} />
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
}