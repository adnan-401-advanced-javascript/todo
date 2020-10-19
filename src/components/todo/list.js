import React from 'react';

class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <li
            className={`complete-${item.completed.toString()}`}
            key={item._id}
          >
            <span onClick={() => this.props.handleComplete(item._id)}>
              {item.text}
            </span>
          <button onClick={() => this.props.editItem(item._id)}>
          edit
          </button>
          <button onClick={() => this.props.deleteItem(item._id)}>
          del
          </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
