import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import { Provider, } from 'react-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import Routes from 'src/route'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const history = createHistory()
const middleware  = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware,thunk)
)

ReactDOM.render(
	 <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
     <Routes/>
    </ConnectedRouter>
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
