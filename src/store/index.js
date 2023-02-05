import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer/user.reducer';
import postReducer from './reducer/post.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))
export default store