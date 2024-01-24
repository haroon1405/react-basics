// in App.jsx
import {Provider} from "react-redux"
import store from "./redux/store.js"

<Provider store={store}>
    <App />
</Provider>


// in redux/store.js
import {configureStore} from "@reduxjs/toolkit"
import firstReducer from "./reducer.js"

const store = configureStore({
    reducer:{
        first: firstReducer
    }
})

export default store


// in redux/reducer.js
import {createReducer} from "@reduxjs/toolkit"

const firstReducer = createReducer(
    {
        count: 0
    },
    {
        countUp: (state,action) => {
            state.count += action.payload
        }
    }
)
export default firstReducer


// in any jsx file for actionHandler
import {useDispatch} from "react-redux"

const dispatch = useDispatch()

dispatch({
    type:"countUp",
    payload:1
})


// in any jsx file for using state
import {useSelector} from "react-redux"

const {count} = useSelector((state) => state.first)