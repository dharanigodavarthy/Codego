import {createStore,applyMiddleware} from 'redux';
import rootReducers from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
export default function configureStore(IntialState){
    return createStore(
        rootReducers,
        IntialState,
        composeWithDevTools(
            applyMiddleware()
        )  
    );
}