import React from 'react';
import './App.css';
import ToDos from './ToDos';
import AddToDo from './AddToDo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, task: "To Learn React" },
        { id: 2, task: "Learn it damn well!" }
      ]
    };
  }

  deleteTodo = (id) => {
    let todos1 = this.state.todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todos: todos1 });
  }

  addToDo = (task) => {
    let item = {
      id : this.state.todos.length+1,
      task : task
    }
    
    this.setState({ todos: this.state.todos.concat([item]) });
  }

  render() {
    return (
      <div className="App container">
        <h1> Things To Do </h1>
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
