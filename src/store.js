import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import { reduxFirebase } from 'react-redux-firebase'

// Replace with your Firebase config
const fbConfig = {
    apiKey: "AIzaSyA9R1nXlaGx3YItB9I4PYs_Eb4PYIgmTtQ",
    authDomain: "plalist-2fb8b.firebaseapp.com",
    databaseURL: "https://plalist-2fb8b.firebaseio.com",
    projectId: "plalist-2fb8b",
    storageBucket: "plalist-2fb8b.appspot.com",
    messagingSenderId: "1055253613205"
}

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reduxFirebase(fbConfig, { userProfile: 'users' }),
    // Redux Devtools
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
