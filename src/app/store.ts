import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import emailReducer from "../slices/emailSlice";
import dataReducer from "../slices/dataSlice";
import modalReducer from "../slices/modalSlice";

import { reducer as formReducer } from "redux-form";
import rootSaga from "../services/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    email: emailReducer,
    form: formReducer,
    data: dataReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
