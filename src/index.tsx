import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

import { addUser } from "actions";
import App from "App"
import chat from "reducers"
import registerServiceWorker from "registerServiceWorker"

import "./styles.ts"

const store = createStore(chat);
store.dispatch(addUser("Me"));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
)
registerServiceWorker()
