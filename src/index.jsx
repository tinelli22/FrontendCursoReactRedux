import React from 'react'
import ReactDOM from 'react-dom'

//import App from './main/app'
import Routes from './main/routes';
import reducers from './main/reducers'

import multi from 'redux-multi';
import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))