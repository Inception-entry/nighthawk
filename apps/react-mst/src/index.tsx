import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { connectReduxDevtools } from "mst-middlewares";
import { createStore } from "./models/createStore";
import { StoreProvider } from "./components/StoreProvider";

const rootStore = createStore()

connectReduxDevtools(require("remotedev"), rootStore)

const Root: React.FunctionComponent<{}> = () => (
  <StoreProvider value={rootStore}>
    <App />
  </StoreProvider>
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
