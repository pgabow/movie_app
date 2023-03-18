import { legacy_createStore as createStore , combineReducers, applyMiddleware } from 'redux'

import categoryReducer from "store/category/reducer"
import showReducer from "store/show/reducer";
import showReducerSearch from "store/searchShow/reducer"
import detailReducer from 'store/detail/reducer'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({categoryReducer, showReducer, showReducerSearch, detailReducer})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store