const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
// actions
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const REMOVE_SUBSCRIBER = 'REMOVE_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';

const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};
const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};
const addView = () => {
  return {
    type: ADD_VIEWCOUNT,
  };
};

// reducers
const subscriberState = {
  subscribers: 0,
};
const subscriberReducer = (state = subscriberState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers + 1,
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        subscribers: state.subscribers - 1,
      };
    default:
      return state;
  }
};

const viewState = {
  viewCount: 0,
};
const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEWCOUNT:
      return {
        ...state,
        viewCount: state.viewCount + 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  subscriberReducer,
  viewReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(removeSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addView());
store.dispatch(addView());
