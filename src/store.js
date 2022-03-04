import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //redux thunk permite utilizar funciones asincronas, entre otras cosas.
import reducer from './reducers';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), //el applyMiddleware lo pongo porque voy a usar thunk, sino no hace falta.

        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? // en esta parte compose es donde se utiliza redux developer tools
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;