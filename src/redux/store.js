import { createStore, combineReducers } from "redux";
//import { composeWithDevtools } from "redux-devtools-extension";
//import { itemsReducer, filterReducer } from "./contact/contact-reducer";
import contactsReducer from "./contact/contact-reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  //   items: itemsReducer,
  //   filter: filterReducer,
});
const store = createStore(
  rootReducer,
  //  composeWithDevtools()
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
