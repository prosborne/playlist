import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// Import Data from Firebase to add to the store
// import comments from './data/comments';
// import posts from './data/posts';

// create an object for the default data
const defaultState = {
  list,
  user,
  dashboard
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
