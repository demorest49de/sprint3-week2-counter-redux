
import { combineReducers, legacy_createStore as createStore } from 'redux'
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
// window.store = store
