import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer';

const store = createStore(cartReducer);

export default store;
