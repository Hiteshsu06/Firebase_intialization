import {legacy_createStore} from 'redux';
import productReducer from './redux/reducers/Main';

const store=legacy_createStore(productReducer);
export default store;