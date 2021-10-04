import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const INCREASE_NUMBER = 'INCREASE_NUMBER';
const DECREASE_NUMBER = 'DECREASE_NUMBER';

const increaseNumber = () => ({
  type: INCREASE_NUMBER,
});

const decreaseNumber = () => ({
  type: DECREASE_NUMBER,
});

const initialState = {
  number: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_NUMBER: {
      return {
        number: state.number + 1,
      };
    }
    case DECREASE_NUMBER: {
      return {
        number: state.number - 1,
      };
    }
    default:
      return state;
  }
};

const App = () => {
  const dispatch = useDispatch();
  const handleDecreaseBtn = useCallback(() => dispatch(decreaseNumber()), [dispatch]);
  const handleIncreaseBtn = useCallback(() => dispatch(increaseNumber()), [dispatch]);
  const number = useSelector((state) => state.number);

  return (
    <div>
      <button onClick={handleDecreaseBtn}>-</button>
      <span>{number}</span>
      <button onClick={handleIncreaseBtn}>+</button>
    </div>
  );
};

export default App;
