const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const ADD_TODO = 'todo/ADD_TODO';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

export const insert = (text) => ({
  type: ADD_TODO,
  todo: { text },
});

const initialState = {
  input: '',
  todos: [],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        input: action.input,
      };
    }
    case ADD_TODO:
      console.log(state);
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    default:
      return state;
  }
};

export default todo;
