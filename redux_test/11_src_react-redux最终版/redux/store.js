/*
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建store对象
import {createStore, applyMiddleware} from 'redux'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

import allReducer from './reducers'
//引入redux-thunk, 用于支持异步action
import thunk from 'redux-thunk'

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

// 暴露store
export default store