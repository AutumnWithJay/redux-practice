import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <div>
      <span>{todo.text}</span>
    </div>
  );
};

const Todo = ({ input, todos, changeInput, onAddTodo }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(input);
    changeInput('');
  };
  const onChange = (e) => changeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
      </form>
      <div>{todos && todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}</div>
    </div>
  );
};

export default Todo;
