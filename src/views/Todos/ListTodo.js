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
    editId: null, // id đang edit
    editValue: '', // nội dung edit
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  handleDeleteTodo = (todo) => {
    let newList = this.state.listTodos.filter(
      (item) => item.id !== todo.id
    );
    this.setState({ listTodos: newList });
  };

  // Bấm Edit
  handleEdit = (todo) => {
    this.setState({
      editId: todo.id,
      editValue: todo.title,
    });
  };

  // Gõ text khi edit
  handleChangeEdit = (e) => {
    this.setState({ editValue: e.target.value });
  };

  // Lưu lại
  handleSave = (todo) => {
    let updated = this.state.listTodos.map((item) =>
      item.id === todo.id
        ? { ...item, title: this.state.editValue }
        : item
    );

    this.setState({
      listTodos: updated,
      editId: null,
      editValue: '',
    });
  };

  render() {
    let { listTodos, editId, editValue } = this.state;

    return (
      <div className="list-todo-container">
        <h3>App ToDo</h3>
        <AddTodo addNewTodoo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos.map((item, index) => (
            <div className="todo-child" key={item.id}>
              {/* Nếu đang edit */}
              {editId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={this.handleChangeEdit}
                  />
                  <button
                    onClick={() => this.handleSave(item)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button
                    onClick={() => this.handleEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      this.handleDeleteTodo(item)
                    }
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListTodo;
