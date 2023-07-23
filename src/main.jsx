import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.min.css";

const store = legacy_createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Root />
    <ToastContainer></ToastContainer>
      </Provider>
    </BrowserRouter>
  </>
);
