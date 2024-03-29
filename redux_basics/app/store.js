const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')
const reduxlogger = require("redux-logger")

const logger = reduxlogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store
