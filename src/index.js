import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootReducer, { rootSaga } from "./modules";
import { loadableReady } from "@loadable/component";
import { composeWithDevTools } from "redux-devtools-extension";
import {tempSetUser, check} from './modules/user';
import {selectJournal} from './modules/journal';
import {ThemeProvider} from './lib/ThemeProvider';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger('default');
let store = '';
if (process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    window.__PRELOADED_STATE__,
    composeWithDevTools(applyMiddleware(logger,thunk,sagaMiddleware))
  );
}else{
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk,sagaMiddleware))
  );
}

function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;

    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch(e) {
    console.log('localStorage is not working');
  }
}

function loadJournal() {
  try{
    const journalItem = JSON.parse(localStorage.getItem('journalItem'));
    if(!journalItem) return;

    store.dispatch(selectJournal({journalItem}));
  }catch(e) {
    console.log('journal is not in localStorage');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();
loadJournal();

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const root = document.getElementById("root");

if (process.env.NODE_ENV === "production") {
  loadableReady(() => {
    ReactDOM.render(<Root />, root);
  });
} else {
  ReactDOM.render(<Root />, root);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
