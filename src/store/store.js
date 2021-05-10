import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import storage from "redux-persist/lib/storage"
import { routerMiddleware } from "connected-react-router"

import rootReducer from "./rootReducer"
import history from "../history"
import { watchUserSaga } from "./User/User.sagas"

const sagaMiddleware = createSagaMiddleware()
const connectedRouterMiddleware = routerMiddleware(history)

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

let middleware = []
if (process.env.NODE_ENV === "development") {
  middleware = [connectedRouterMiddleware, sagaMiddleware, logger]
} else {
  middleware = [connectedRouterMiddleware, sagaMiddleware]
}

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)

sagaMiddleware.run(watchUserSaga)
