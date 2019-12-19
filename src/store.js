import { createStore, applyMiddleware, compose } from 'redux'
import reducer from "./reducers/index";
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

// const persistConfig = {
//   key: 'root',
//   storage,
//   //stateReconciler: hardSet,
//   //whitelist: ['currentUser'],
//   //blacklist: ['listOfGames']
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const enhancer = composeEnhancers(
//   applyMiddleware(ReduxThunk)
// )

// export default () => {
//   let store = createStore(persistedReducer, enhancer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

const store = createStore(reducer, enhancer)

export default store