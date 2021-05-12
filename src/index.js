import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Подключаю стор
import { store } from './store/configureStore'

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}> <App /> </Provider>, rootElement);
