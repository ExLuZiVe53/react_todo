// ======================App.js==============================
import React, { Component } from "react";
import Form from "./components/Form/Form.js";

import TodoList from "./components/TodoList/TodoList.js";
import initialTodos from "./todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <>
        <div>
          <p>Total of todo:{totalTodoCount}</p>
          <p>Number of completed todo:{completedTodoCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <Form onSubmit={this.onSubmitHandler} />
      </>
    );
  }
}

export default App;
