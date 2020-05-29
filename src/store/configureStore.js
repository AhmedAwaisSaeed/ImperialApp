import { createStore, combineReducers } from 'redux';

import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    placessRoot: placesReducer
});

const configureStore = () => {
    console.log("in configure store");
    return createStore(rootReducer);
};

export default configureStore;