import { createStore } from 'redux'
import { rootReducer } from '../reducers'

// Создаём стор на основе корневого редюсера 
export const store = createStore(rootReducer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


