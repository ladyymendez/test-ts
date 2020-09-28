import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import testData from './testData';

const redux = () => {
  const reducers = combineReducers({
    testData
  });

  return createStore(reducers, applyMiddleware(thunk));
};
export default redux;