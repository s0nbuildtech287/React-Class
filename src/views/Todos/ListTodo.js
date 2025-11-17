import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'Making video' },
      { id: 'todo3', title: 'Fixing bugs' },
    ],
  };
  // add task
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };
  // delete task
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter(
      (item) => item.id !== todo.id
    );
    this.setState({
      listTodos: currentTodos,
    });
  };

  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodoo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="button">Edit</button>
                  <button
                    className="button"
                    onClick={() =>
                      this.handleDeleteTodo(item)
                    }
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodo;
