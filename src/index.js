import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { createStore ,applyMiddleware,compose} from "redux";
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import { Provider } from "react-redux";
import reducer from './reducers'
import 'antd-mobile/dist/antd-mobile.css'
import './config'
import Main from './Main'
import Login from './Login'


const emptyFn = () => {}
const store = createStore(reducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : emptyFn()
))
ReactDom.render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/main' component={Main}></Route>
                    <Redirect to='/main'></Redirect>
                </Switch>
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
)

