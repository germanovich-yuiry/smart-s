import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from "redux-form";

import emailReducer from "../slices/email/emailSlice";
import dataReducer from "../slices/data/dataSlice";
import modalReducer from "../slices/modal/modalSlice";

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

export type RootState = ReturnType<typeof store.getState>;
export default store;
