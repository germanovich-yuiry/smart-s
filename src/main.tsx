import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

import GlobalStyles from "./styles/global.ts";
import FontStyles from "./styles/fontStyles.ts";
import { Provider } from "react-redux";

import store from "./app/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <FontStyles />

      <App />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
);
