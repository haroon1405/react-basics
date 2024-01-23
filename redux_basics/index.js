const store = require("./app/store")
const cakeActions = require('./features/cake/cakeSlice').cakeActions

console.log('Initial Value', store.getState())
const unSubscribe = store.subscribe(()=>{
    console.log("Updated value", store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

unSubscribe()