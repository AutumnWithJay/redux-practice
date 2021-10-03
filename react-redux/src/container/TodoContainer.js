import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../components/Todo';
import { changeInput, insert } from '../todo';

const TodoContainer = () => {
  const { input, todos } = useSelector((todos) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
  const onAddTodo = useCallback((input) => dispatch(insert(input)), [dispatch]);
  return (
    <Todo
      type="text"
      input={input}
      todos={todos}
      changeInput={onChangeInput}
      onAddTodo={onAddTodo}
    />
  );
};

export default TodoContainer;
