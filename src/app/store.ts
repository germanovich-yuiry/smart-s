import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import emailReducer from "../slices/emailSlice";
import rootSaga from "../services/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    email: emailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { reducer as formReducer } from "redux-form";

// const store = configureStore({
//   reducer: {
//     form: formReducer,
//   },
// });

// export default store;
