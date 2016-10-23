import React from 'react';

export function Todo(props) {
  const { todo } = props;
  if (todo.isDone) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

export function TodoList(props) {
  const { todos, toggleTodo, addTodo } = props;

  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13); // enter
    const isLongEnough = text.length > 0; // validation

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => event => toggleTodo(id);

  return (
    <div className="col-xs-6 col-xs-offset-3 ">
      <input
        type="text"
        className='form-control'
        placeholder="Add todo"
        onKeyDown={onSubmit} />
      <ul className="list-group">
      {todos.map(todo => (
        <li
          key={todo.get('id')}
          className="list-group-item"
          onClick={toggleClick(todo.get('id'))}
          >
          <Todo todo={todo.toJS()} />
        </li>
      ))}
      </ul>
    </div>
  );
}
