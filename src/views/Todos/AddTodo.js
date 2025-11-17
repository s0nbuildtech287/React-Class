import React from 'react';

class AddTodo extends React.Component {
  state = {
    title: '',
  };
  //   lấy dữ liệu từ input cho state
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  //   tạo 1 hàm callback để thêm task đánh sang bên thằng cha
  handleAddTodo = () => {
    if (!this.state.title) {
      alert('Missing title...');
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000) + 'todo',
      title: this.state.title,
    };
    this.props.addNewTodoo(todo);
    this.setState({
      title: '',
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(event) =>
            this.handleOnChangeTitle(event)
          }
        />
        <button
          type="button"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
