// useContext
// in app.jsx
export const UserContext = React.createContext()
<UserContext.Provider value={whateverValue}>
    <Component />
</ UserContext.Provider>

// in comp.jsx
import {UserContext} from "./app.jsx"
import { useContext } from "react"

const reqValue = useContext(UserContext)
<Home>
    {reqValue}
</Home>





// useReducer
// in comp.jsx
import { useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'countUp':
            return { ...state, firstCounter: state.firstCounter + action.payload };
        case 'countUp2':
            return { ...state, secondCounter: state.secondCounter + action.payload };
        default:
            return state;
    }
};

export function Component() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // onClick
    const handleCountUp = () => {
        dispatch({ 
            type: 'countUp',
            payload: 1 
        });
    };

    const handleCountUpTwo = () => {
        dispatch({ 
            type: 'countUp2',
            payload: 2 
        });
    };

    // state
    return (
        <div>
            <button onClick={handleCountUp}>Count Up</button>
            <p>Counter: {state.firstCounter}</p>
            <button onClick={handleCountUpTwo}>Count Up by Two</button>
            <p>Counter: {state.secondCounter}</p>
        </div>
    );
}







// useContext and useReducer
// in app.jsx
import React, { createContext, useReducer } from "react";
import Component from "./comp.jsx";

export const UserContext = createContext(); 

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'countUp':
            return { ...state, firstCounter: state.firstCounter + action.payload };
        case 'countUp2':
            return { ...state, secondCounter: state.secondCounter + action.payload };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ countState: state, countDispatch: dispatch }}>
            <Component />
        </UserContext.Provider>
    );
};

export default App;


// in comp.jsx
import React, { useContext } from "react";
import { UserContext } from "./app.jsx";

const Component = () => {
    const { countState, countDispatch } = useContext(UserContext); // Destructure context

    const handleCountUp = () => {
        countDispatch({
            type: 'countUp',
            payload: 1
        });
    };

    const handleCountUpTwo = () => {
        countDispatch({
            type: 'countUp2',
            payload: 2
        });
    };

    return (
        <div>
            <button onClick={handleCountUp}>Count Up</button>
            <p>Counter: {countState.firstCounter}</p>
            <button onClick={handleCountUpTwo}>Count Up by Two</button>
            <p>Counter: {countState.secondCounter}</p>
        </div>
    );
};

export default Component;

