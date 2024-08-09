import { configureStore, Store } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reducer as formReducer } from "redux-form";

import emailReducer from "../slices/emailSlice";
import dataReducer from "../slices/dataSlice";
import modalReducer from "../slices/modalSlice";

import rootSaga from "../services/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store: Store = configureStore({
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
